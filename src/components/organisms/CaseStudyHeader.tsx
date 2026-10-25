import Link from "next/link";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Icon } from "@/components/atoms/Icon";

type Meta = { label: string; value: string; href?: string };

/** Title block + key facts strip at the top of a case study. */
export function CaseStudyHeader({ eyebrow, title, intro, meta }: { eyebrow: string; title: string; intro: string; meta: Meta[] }) {
  return (
    <>
      <div className="pt-8">
        <Link href="/#work" className="inline-flex min-h-11 items-center gap-2 font-mono text-[13px] text-fg-muted hover:text-accent">
          <Icon name="arrowLeft" size={15} />
          all work
        </Link>
      </div>
      <header className="flex animate-rise flex-col gap-6 pt-[clamp(40px,7vw,72px)] pb-[clamp(40px,6vw,56px)]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" className="text-[clamp(34px,6vw,52px)] leading-[1.08] tracking-[-0.03em]">
          {title}
        </Heading>
        <p className="m-0 text-[clamp(17px,2vw,19px)] leading-relaxed text-fg-muted">{intro}</p>
      </header>
      <dl className="reveal m-0 flex flex-wrap border-y border-line">
        {meta.map((m) => (
          <div key={m.label} className="flex flex-[1_1_180px] flex-col gap-1.5 py-6 pr-4">
            <dt className="font-mono text-xs text-fg-subtle">{m.label}</dt>
            <dd className="m-0 text-[15px]">
              {m.href ? (
                <a href={m.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {m.value}
                </a>
              ) : (
                m.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
