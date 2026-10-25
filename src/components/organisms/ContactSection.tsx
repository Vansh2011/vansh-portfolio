import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Icon } from "@/components/atoms/Icon";
import { CopyEmailButton } from "@/components/molecules/CopyEmailButton";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { contact, site } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="pt-[clamp(72px,10vw,112px)] pb-[clamp(64px,9vw,96px)]">
      <div className="reveal flex flex-col gap-7 rounded-[20px] border border-line bg-surface px-[clamp(20px,5vw,48px)] py-[clamp(32px,6vw,64px)]">
        <Eyebrow>05 / contact</Eyebrow>
        <h2 className="m-0 max-w-[720px] text-[clamp(32px,5.6vw,52px)] leading-[1.1] font-semibold tracking-[-0.03em]">
          {contact.heading}
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2.5 border-b border-line-strong pb-1 font-mono text-[clamp(16px,2.2vw,20px)] break-all text-fg hover:text-accent"
          >
            <Icon name="mail" size={20} className="flex-none text-accent" />
            {site.email}
          </a>
          <CopyEmailButton email={site.email} />
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <SocialLinks size="sm" withResume />
        </div>
      </div>
    </section>
  );
}
