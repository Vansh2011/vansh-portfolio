import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center gap-6">
      <Eyebrow>404 / page not found</Eyebrow>
      <Heading as="h1" level="display">
        This page wandered off <span className="text-fg-subtle">¯\_(ツ)_/¯</span>
      </Heading>
      <Button href="/" variant="primary" trailingArrow>
        Back home
      </Button>
    </Container>
  );
}
