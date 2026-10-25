import { techMarquee } from "@/lib/data";

/** Endless strip of technologies. The list is rendered twice so the loop is seamless. */
export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <section aria-label="Technologies I use" className="group marquee-mask overflow-hidden border-b border-line py-5">
      <ul className="m-0 flex w-max animate-marquee list-none p-0 font-mono text-sm text-fg-subtle group-hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= techMarquee.length || undefined}
            className="inline-flex items-center gap-7 pr-7 whitespace-nowrap transition-colors hover:text-fg"
          >
            {t}
            <span aria-hidden="true" className="text-accent">
              /
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
