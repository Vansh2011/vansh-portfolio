"use client";

import { useRef, type MouseEvent } from "react";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { StatusDot } from "@/components/atoms/StatusDot";
import { RotatingWord } from "@/components/molecules/RotatingWord";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { TerminalCard } from "@/components/molecules/TerminalCard";
import { hero, site, terminalLines } from "@/lib/data";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Move the spotlight with the cursor. Writes CSS vars directly: no re-render.
  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = bgRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative flex flex-wrap items-center gap-[clamp(40px,6vw,56px)] pt-[clamp(56px,10vw,104px)] pb-[clamp(56px,9vw,96px)]"
    >
      <div ref={bgRef} aria-hidden="true" className="hero-bg">
        <div className="hero-dots" />
        <div className="hero-glow" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-[999_1_480px] flex-col gap-6">
        <p className="m-0 flex animate-rise items-center gap-3 font-mono text-[13px] text-fg-subtle">
          <StatusDot />
          {site.currentRole}
        </p>
        <p className="m-0 animate-rise text-[clamp(18px,2.4vw,22px)] [animation-delay:40ms]">
          {hero.greeting}{" "}
          <span role="img" aria-label="waving hand" className="inline-block origin-[70%_70%] animate-wave">
            👋
          </span>
        </p>
        <Heading as="h1" level="display" className="animate-rise [animation-delay:80ms]">
          {hero.lead}
          <br />
          <RotatingWord words={hero.words} />
        </Heading>
        <p className="m-0 max-w-[560px] animate-rise text-[clamp(16px,1.8vw,18px)] leading-relaxed text-fg-muted [animation-delay:160ms]">
          {hero.intro}
        </p>
        <div className="flex animate-rise flex-wrap gap-3 pt-2 [animation-delay:240ms]">
          <Button href="/#work" variant="primary" trailingArrow>
            See my work
          </Button>
          <SocialLinks />
        </div>
      </div>

      <TerminalCard
        lines={terminalLines}
        className="relative z-10 flex-[1_1_340px] animate-[rise_0.9s_0.3s_cubic-bezier(0.2,0.7,0.2,1)_both,floaty_6s_1.4s_ease-in-out_infinite] max-md:animate-[rise_0.9s_0.3s_cubic-bezier(0.2,0.7,0.2,1)_both]"
      />
    </section>
  );
}
