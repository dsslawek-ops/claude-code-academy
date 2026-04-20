"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface FeedbackButtonsProps {
  contentType: "article" | "lesson";
  contentId: string;
}

export function FeedbackButtons({ contentType, contentId }: FeedbackButtonsProps) {
  const [submitted, setSubmitted] = useState<boolean | null>(null);

  const submit = async (helpful: boolean) => {
    setSubmitted(helpful);
    try {
      const supabase = createClient();
      await supabase.from("content_feedback").insert({
        content_type: contentType,
        content_id: contentId,
        helpful,
      });
    } catch {
      // Silent fail — feedback is non-critical
    }
  };

  if (submitted !== null) {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs text-muted-foreground">
        {submitted ? (
          <ThumbsUp className="h-3.5 w-3.5 text-brand" />
        ) : (
          <ThumbsDown className="h-3.5 w-3.5" />
        )}
        Dzięki za opinię
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5">
      <span className="mr-2 text-[12px] text-muted-foreground">
        Pomocne?
      </span>
      <button
        onClick={() => submit(true)}
        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-brand"
        aria-label="Tak, pomocne"
      >
        <ThumbsUp className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => submit(false)}
        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Nie, niepomocne"
      >
        <ThumbsDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
