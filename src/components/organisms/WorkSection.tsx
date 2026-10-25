import Image from "next/image";
import { Card } from "@/components/atoms/Card";
import { Heading } from "@/components/atoms/Heading";
import { Icon } from "@/components/atoms/Icon";
import { Tag } from "@/components/atoms/Tag";
import { HighlightCard } from "@/components/molecules/HighlightCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { WorkRow } from "@/components/molecules/WorkRow";
import { currentWork, featured, highlights } from "@/lib/data";

export function WorkSection() {
  return (
    <section id="work" className="flex flex-col gap-[clamp(28px,4vw,40px)] pt-[clamp(72px,10vw,112px)] pb-10">
      <SectionHeader eyebrow="01 / selected work" title="Things I've built at work" />

      {/* Featured project */}
      <Card href={featured.href} className="reveal flex flex-wrap overflow-hidden">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5 p-[clamp(24px,4vw,40px)]">
          <div className="flex flex-wrap gap-2">
            <Tag variant="pill-accent">{featured.badge}</Tag>
            <Tag variant="pill">{featured.category}</Tag>
          </div>
          <Heading as="h3" level="card">
            {featured.title}
          </Heading>
          <p className="m-0 text-base leading-relaxed text-fg-muted">{featured.summary}</p>
          <div className="flex flex-wrap gap-2">
            {featured.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 pt-1 font-mono text-[13px] text-accent">
            Read the case study
            <Icon name="arrowRight" size={15} className="transition-transform duration-200 group-hover/card:translate-x-1" />
          </span>
        </div>
        <div className="min-h-[260px] min-w-0 flex-[1_1_380px] overflow-hidden border-line max-md:border-t md:border-l">
          <Image
            src={featured.image.src}
            width={featured.image.width}
            height={featured.image.height}
            alt={featured.image.alt}
            sizes="(max-width: 800px) 100vw, 560px"
            className="block h-full min-h-[260px] w-full object-cover object-left-top transition-transform duration-500 ease-out-soft group-hover/card:scale-[1.03]"
          />
        </div>
      </Card>

      <div className="flex flex-wrap gap-5">
        {highlights.map((h) => (
          <HighlightCard key={h.title} {...h} />
        ))}
      </div>

      {/* Confidential work: text only */}
      <div className="reveal flex flex-col gap-5 pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2">
          <Heading as="h3" level="sub" className="text-2xl tracking-[-0.01em]">
            {currentWork.title}
          </Heading>
          <span className="font-mono text-xs text-fg-subtle">{currentWork.note}</span>
        </div>
        <div className="flex flex-col border-t border-line">
          {currentWork.rows.map((r) => (
            <WorkRow key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
