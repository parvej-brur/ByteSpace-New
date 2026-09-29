"use client";

import Image from "next/image";
import { createContext, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

interface Toast {
  id: number;
  title: string;
  description?: string;
}

interface ToastContextValue {
  showToast: (title: string, description?: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

const TOAST_DURATION_MS = 3500;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<Toast | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const showToast = useCallback((title: string, description?: string) => {
    clearTimeout(timer.current);
    setToast({ id: Date.now(), title, description });
    timer.current = setTimeout(() => setToast(null), TOAST_DURATION_MS);
  }, []);

  const dismiss = useCallback(() => {
    clearTimeout(timer.current);
    setToast(null);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed top-24 right-4 z-50 flex w-[calc(100%-2rem)] max-w-96 justify-end sm:right-6"
      >
        {toast && (
          <div
            key={toast.id}
            className="pointer-events-auto relative w-full animate-[toast-in_300ms_ease-out] overflow-hidden rounded-2xl border border-shuttle-gray-200 bg-white shadow-[0_16px_40px_rgba(36,37,40,0.16)]"
          >
            <div className="flex items-start gap-4 p-4 pr-12">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-shuttle-gray-950">
                <Image src="/icons/logo.svg" alt="" width={20} height={22} />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-label-l text-shuttle-gray-950">{toast.title}</p>
                {toast.description && (
                  <p className="text-body-s text-shuttle-gray-700">{toast.description}</p>
                )}
              </div>
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={dismiss}
              className="absolute top-3 right-3 grid size-7 cursor-pointer place-items-center rounded-full text-shuttle-gray-400 outline-offset-2 transition-colors hover:bg-shuttle-gray-50 hover:text-shuttle-gray-950 focus-visible:outline-2 focus-visible:outline-persian-blue-800"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <span
              className="absolute inset-x-0 bottom-0 h-1 origin-left animate-[toast-progress_3500ms_linear_forwards] bg-electric-lime-400"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
