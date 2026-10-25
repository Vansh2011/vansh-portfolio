import { Icon, type IconName } from "@/components/atoms/Icon";
import { SkillChip } from "@/components/atoms/SkillChip";

type SkillGroupProps = { label: string; icon: IconName; skills: string[]; learning?: boolean };

export function SkillGroup({ label, icon, skills, learning }: SkillGroupProps) {
  return (
    <div className="flex flex-[1_1_220px] flex-col gap-3">
      <h3 className="m-0 flex items-center gap-2 font-mono text-xs font-normal text-fg-subtle">
        <Icon name={icon} size={16} strokeWidth={2} className="text-accent" />
        {label}
        {learning && <span className="text-accent">· learning</span>}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <SkillChip key={s} label={s} dashed={learning} />
        ))}
      </div>
    </div>
  );
}
