"use client";

import { ACCENTS, useAccent } from "@/providers/AccentProvider";

/** Lets visitors pick the site's accent colour. */
export function AccentSwatches() {
  const { accent, setAccent } = useAccent();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Accent colour">
      <span className="pr-1.5">accent:</span>
      {ACCENTS.map((a) => {
        const active = a.hex === accent;
        return (
          <button
            key={a.hex}
            type="button"
            onClick={() => setAccent(a.hex)}
            aria-label={`${a.name} accent`}
            aria-pressed={active}
            className="flex size-9 cursor-pointer items-center justify-center rounded-full border-2 bg-transparent p-0 transition-transform duration-200 hover:-translate-y-0.5"
            style={{ borderColor: active ? a.hex : "transparent" }}
          >
            <span className="size-4 rounded-full" style={{ background: a.hex }} />
          </button>
        );
      })}
    </div>
  );
}
