"use client";

// Error boundaries must be Client Components. This file replaces the root layout
// when active, so it renders its own <html>/<body> and global styles do not apply.
// Next.js 16 passes `retry` here — not `reset`.
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Something went wrong</h1>
        {error.digest ? <p>Reference: {error.digest}</p> : null}
        <button type="button" onClick={() => retry()}>
          Try again
        </button>
      </body>
    </html>
  );
}
