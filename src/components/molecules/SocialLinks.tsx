import { Button } from "@/components/atoms/Button";
import { site } from "@/lib/data";

/** GitHub + LinkedIn buttons, optionally with a resume download. */
export function SocialLinks({ size = "md", withResume = false }: { size?: "md" | "sm"; withResume?: boolean }) {
  return (
    <>
      <Button href={site.github} icon="github" size={size}>
        GitHub
      </Button>
      <Button href={site.linkedin} icon="linkedin" size={size}>
        LinkedIn
      </Button>
      {withResume && (
        <Button href={site.resume} icon="download" size={size} variant="primary" download>
          Download resume
        </Button>
      )}
    </>
  );
}
