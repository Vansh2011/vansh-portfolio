import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { CaseSection } from "@/components/molecules/CaseSection";
import { TakeawayCard } from "@/components/molecules/TakeawayCard";

type TakeawaysProps = {
  eyebrow: string;
  items: { title: string; body: string }[];
  tradeoff: { title: string; body: string };
  differently: { title: string; points: string[] };
};

export function Takeaways({ eyebrow, items, tradeoff, differently }: TakeawaysProps) {
  return (
    <CaseSection eyebrow={eyebrow} title="What I took away">
      <div className="flex flex-wrap gap-4">
        {items.map((t, i) => (
          <TakeawayCard key={t.title} index={i + 1} {...t} />
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3 rounded-2xl border border-line p-6">
          <Eyebrow muted>tradeoff</Eyebrow>
          <Heading as="h3" level="sub" className="text-lg">
            {tradeoff.title}
          </Heading>
          <p className="m-0 text-[15px] leading-relaxed text-fg-muted">{tradeoff.body}</p>
        </div>
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3 rounded-2xl border border-line p-6">
          <Eyebrow muted>hindsight</Eyebrow>
          <Heading as="h3" level="sub" className="text-lg">
            {differently.title}
          </Heading>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {differently.points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
                <span aria-hidden="true" className="font-mono text-accent">
                  ▹
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CaseSection>
  );
}
