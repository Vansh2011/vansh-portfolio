import { Container } from "@/components/atoms/Container";
import { ContactSection } from "@/components/organisms/ContactSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { FreelanceSection } from "@/components/organisms/FreelanceSection";
import { Hero } from "@/components/organisms/Hero";
import { StackSection } from "@/components/organisms/StackSection";
import { StatsBar } from "@/components/organisms/StatsBar";
import { TechMarquee } from "@/components/organisms/TechMarquee";
import { WorkSection } from "@/components/organisms/WorkSection";

/**
 * Home page. A server component: it only arranges organisms.
 * Interactive pieces (hero spotlight, stats, tabs…) opt into the client themselves.
 */
export default function HomePage() {
  return (
    <div id="top">
      <Container>
        <Hero />
        <StatsBar />
        <TechMarquee />
        <WorkSection />
        <FreelanceSection />
        <ExperienceSection />
        <StackSection />
        <ContactSection />
      </Container>
    </div>
  );
}
