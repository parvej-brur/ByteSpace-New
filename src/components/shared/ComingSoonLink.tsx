"use client";

import type { ReactNode } from "react";
import { useToast } from "@/hooks/useToast";

interface ComingSoonLinkProps {
  feature: string;
  className?: string;
  children: ReactNode;
}

export function ComingSoonLink({ feature, className, children }: ComingSoonLinkProps) {
  const { showToast } = useToast();

  return (
    <button
      type="button"
      className={`cursor-pointer text-left ${className ?? ""}`}
      onClick={() =>
        showToast(
          `${feature} is coming soon`,
          "We’re working on this feature and it will be available shortly. Thank you for your patience.",
        )
      }
    >
      {children}
    </button>
  );
}
