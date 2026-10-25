import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";

/** Closing card at the end of a case study that links back. */
export function NextStep({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <section className="pt-14 pb-28">
      <Card href={href} className="flex flex-wrap items-center justify-between gap-4 p-8">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs text-fg-subtle">{label}</span>
          <span className="text-[22px] font-semibold">{title}</span>
        </div>
        <Icon name="arrowRight" size={20} className="text-accent transition-transform duration-200 group-hover/card:translate-x-1.5" />
      </Card>
    </section>
  );
}
