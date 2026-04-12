"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

interface LessonData {
  id: string;
  path_id: string;
  module_name: string;
  module_order: number;
  title: string;
  slug: string;
  content: string;
  duration_minutes: number;
  order: number;
  completed: boolean;
}

interface ModuleGroup {
  name: string;
  order: number;
  lessons: LessonData[];
}

import { lessons as entrepreneurLessons } from "@/data/lessons";
import { lessonsCC101 } from "@/data/lessons-cc101";
import { lessonsCCAction } from "@/data/lessons-cc-action";

// Combine all lesson sources
const lessonsData = [...entrepreneurLessons, ...lessonsCC101, ...lessonsCCAction] as unknown as LessonData[];

export function useLessons(pathId: string) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  const pathLessons = lessonsData
    .filter((l) => l.path_id === pathId)
    .sort((a, b) => a.module_order - b.module_order || a.order - b.order);

  // Load progress from Supabase
  useEffect(() => {
    async function loadProgress() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("user_progress")
        .select("lesson_id")
        .eq("user_id", user.id)
        .eq("path_id", pathId)
        .eq("completed", true);

      if (data) {
        setCompletedIds(new Set(data.map((d) => d.lesson_id)));
      }
    }
    loadProgress();
  }, [pathId]);

  const lessons: LessonData[] = pathLessons.map((l) => ({
    ...l,
    completed: completedIds.has(l.id),
  }));

  // Group by module
  const moduleMap = new Map<string, ModuleGroup>();
  for (const lesson of lessons) {
    if (!moduleMap.has(lesson.module_name)) {
      moduleMap.set(lesson.module_name, {
        name: lesson.module_name,
        order: lesson.module_order,
        lessons: [],
      });
    }
    moduleMap.get(lesson.module_name)!.lessons.push(lesson);
  }
  const modules = Array.from(moduleMap.values()).sort(
    (a, b) => a.order - b.order
  );

  const totalCount = lessons.length;
  const completedCount = lessons.filter((l) => l.completed).length;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const markComplete = useCallback(
    async (lessonId: string) => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      await supabase.from("user_progress").upsert(
        {
          user_id: user.id,
          path_id: pathId,
          lesson_id: lessonId,
          completed: true,
          completed_at: new Date().toISOString(),
        },
        { onConflict: "user_id,lesson_id" }
      );

      setCompletedIds((prev) => new Set([...prev, lessonId]));
    },
    [pathId]
  );

  return { lessons, modules, completedCount, totalCount, progressPercent, markComplete };
}
