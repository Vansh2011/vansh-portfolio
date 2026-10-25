import type { Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { BarChart } from "@/components/molecules/BarChart";
import { CaseFigure } from "@/components/molecules/CaseFigure";
import { CaseSection } from "@/components/molecules/CaseSection";
import { CaseStudyHeader } from "@/components/organisms/CaseStudyHeader";
import { NextStep } from "@/components/organisms/NextStep";
import { Takeaways } from "@/components/organisms/Takeaways";
import { fnpCaseStudy as cs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case study: Ferns N Petals",
  description: cs.intro,
};

export default function FnpCaseStudyPage() {
  return (
    <Container narrow>
      <CaseStudyHeader eyebrow={cs.eyebrow} title={cs.title} intro={cs.intro} meta={cs.meta} />

      <div className="reveal py-14">
        <CaseFigure {...cs.heroImage} priority />
      </div>

      <CaseSection eyebrow="01 / what i built" title="The core shopping flow" body={cs.built}>
        <CaseFigure {...cs.productImage} />
      </CaseSection>

      <CaseSection eyebrow="02 / performance" title="Shipping less JavaScript up front" body={cs.performance.body}>
        <BarChart bars={cs.performance.bars} caption={["initial JS bundle", "relative size"]} footnote={cs.performance.note} />
      </CaseSection>

      <CaseSection eyebrow="03 / testing" title="From 45% to 87% test coverage" body={cs.testing.body}>
        <BarChart bars={cs.testing.bars} caption={["test coverage", "of codebase"]} />
      </CaseSection>

      <CaseSection eyebrow="04 / quality" title="Accessibility and code review" body={cs.quality} />

      <Takeaways eyebrow="05 / takeaways" items={cs.takeaways} tradeoff={cs.tradeoff} differently={cs.differently} />

      <NextStep href="/#work" label="back to" title="All work and freelance projects" />
    </Container>
  );
}
