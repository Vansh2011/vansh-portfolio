import { FreelanceCard } from "@/components/molecules/FreelanceCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { freelance } from "@/lib/data";

export function FreelanceSection() {
  return (
    <section id="freelance" className="flex flex-col gap-[clamp(28px,4vw,40px)] pt-[clamp(64px,9vw,96px)] pb-10">
      <SectionHeader eyebrow="02 / freelance" title="Live sites for real clients" />
      <div className="flex flex-wrap gap-6">
        {freelance.map((p) => (
          <FreelanceCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
