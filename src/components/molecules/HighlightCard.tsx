import { Card } from "@/components/atoms/Card";
import { Heading } from "@/components/atoms/Heading";

export function HighlightCard({ metric, title, body }: { metric: string; title: string; body: string }) {
  return (
    <Card className="reveal flex min-w-0 flex-[1_1_260px] flex-col gap-3 p-[clamp(24px,3vw,32px)]">
      <div className="text-[32px] font-semibold tracking-[-0.02em] text-accent">{metric}</div>
      <Heading as="h3" level="sub">
        {title}
      </Heading>
      <p className="m-0 text-[15px] leading-relaxed text-fg-muted">{body}</p>
    </Card>
  );
}
