export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
}

export interface Article {
  id: string;
  category_id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Shortcut {
  id: string;
  key_combo: string;
  key_combo_win: string;
  description: string;
  category: "navigation" | "editing" | "git" | "search" | "tools" | "session" | "vscode";
  platform: "macos" | "vscode" | "both";
  context: string;
}

export interface SlashCommand {
  id: string;
  command: string;
  description: string;
  details: string;
  category: "session" | "navigation" | "model" | "tools" | "planning" | "dev" | "info" | "advanced";
  example?: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  when_to_use: string;
  example?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  description: string;
  target_audience: string;
  total_lessons: number;
  estimated_hours: number;
  order: number;
}

export interface Lesson {
  id: string;
  path_id: string;
  module_name: string;
  module_order: number;
  title: string;
  slug: string;
  content: string;
  duration_minutes: number;
  order: number;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  solution: string;
  tags: string[];
  category: string;
}

export interface ChangelogEntry {
  id: string;
  title: string;
  summary: string;
  type: "feature" | "change" | "fix";
  date: string;
  source_url?: string;
}
