import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SkillGroup } from "@/components/molecules/SkillGroup";
import { skillGroups } from "@/lib/data";

export function StackSection() {
  return (
    <section className="flex flex-col gap-8 pt-[clamp(64px,9vw,96px)] pb-10">
      <SectionHeader eyebrow="04 / stack" title="What I work with" />
      <div className="reveal flex flex-wrap gap-x-6 gap-y-7">
        {skillGroups.map((g) => (
          <SkillGroup key={g.label} {...g} />
        ))}
      </div>
    </section>
  );
}
