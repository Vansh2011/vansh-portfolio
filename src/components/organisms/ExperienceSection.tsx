"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { JobTab } from "@/components/molecules/JobTab";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { jobs } from "@/lib/data";

/** Accessible tabs: click or use arrow keys to switch roles. */
export function ExperienceSection() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const job = jobs[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | null = null;
    if (e.key in keys) next = (active + keys[e.key] + jobs.length) % jobs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = jobs.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <section id="experience" className="flex flex-col gap-[clamp(28px,4vw,40px)] pt-[clamp(64px,9vw,96px)] pb-10">
      <SectionHeader eyebrow="03 / experience" title="Where I've worked" />
      <div className="reveal flex flex-wrap gap-6">
        <div ref={tabsRef} role="tablist" aria-label="Jobs" aria-orientation="vertical" className="flex flex-[1_1_240px] flex-col gap-2">
          {jobs.map((j, i) => (
            <JobTab
              key={j.title}
              id={`job-tab-${i}`}
              panelId="job-panel"
              company={j.company}
              meta={j.short}
              selected={i === active}
              onSelect={() => setActive(i)}
              onKeyDown={onKeyDown}
            />
          ))}
        </div>

        <div
          id="job-panel"
          role="tabpanel"
          aria-labelledby={`job-tab-${active}`}
          className="min-w-0 flex-[999_1_420px] rounded-2xl border border-line bg-surface p-[clamp(22px,3.6vw,36px)]"
        >
          <div key={active} className="flex animate-panel flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-[clamp(19px,2.4vw,22px)] font-semibold">
                {job.title} · <span className="text-accent">{job.company}</span>
              </h3>
              <p className="m-0 font-mono text-xs text-fg-subtle">
                {job.dates} · {job.place}
              </p>
            </div>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
                  <span aria-hidden="true" className="font-mono text-accent">
                    ▹
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
