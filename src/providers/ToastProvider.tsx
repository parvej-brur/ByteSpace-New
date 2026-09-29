"use client";

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

  useEffect(() => () => clearTimeout(timer.current), []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-4 bottom-6 z-50 flex justify-center"
      >
        {toast && (
          <div
            key={toast.id}
            className="pointer-events-auto flex max-w-md animate-[toast-in_250ms_ease-out] flex-col gap-1 rounded-2xl bg-shuttle-gray-950 px-5 py-4 text-white shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
          >
            <p className="text-label-m text-electric-lime-400">{toast.title}</p>
            {toast.description && (
              <p className="text-body-s text-shuttle-gray-100">{toast.description}</p>
            )}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
