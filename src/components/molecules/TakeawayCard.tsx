import { Card } from "@/components/atoms/Card";
import { Heading } from "@/components/atoms/Heading";

export function TakeawayCard({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <Card className="flex min-w-0 flex-[1_1_320px] flex-col gap-3 p-6">
      <span className="font-mono text-xs text-accent">{String(index).padStart(2, "0")}</span>
      <Heading as="h3" level="sub" className="text-lg">
        {title}
      </Heading>
      <p className="m-0 text-[15px] leading-relaxed text-fg-muted">{body}</p>
    </Card>
  );
}
