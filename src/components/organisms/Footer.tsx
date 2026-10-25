import { Container } from "@/components/atoms/Container";
import { AccentSwatches } from "@/components/molecules/AccentSwatches";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-5 font-mono text-xs text-fg-subtle">
        <p className="m-0">
          © {new Date().getFullYear()} Vansh Gupta · built with Next.js and{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>{" "}
          in Bengaluru
        </p>
        <AccentSwatches />
      </Container>
    </footer>
  );
}
