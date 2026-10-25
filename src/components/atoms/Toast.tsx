/** Short-lived message pinned to the bottom of the screen. Remount (change `key`) to replay. */
export function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 z-30 max-w-[calc(100%-40px)] animate-toast rounded-[10px] border border-line-strong bg-surface px-4.5 py-3 font-mono text-[13px] text-fg shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]"
    >
      <span className="text-accent">//</span> {message}
    </div>
  );
}
