import Image from "next/image";
import type { ReactNode } from "react";
import { Card } from "@/components/atoms/Card";
import { Heading } from "@/components/atoms/Heading";
import { Icon } from "@/components/atoms/Icon";
import { StatusDot } from "@/components/atoms/StatusDot";
import { Tag } from "@/components/atoms/Tag";
import type { FreelanceProject } from "@/lib/data";

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm leading-relaxed">
      <dt className="flex-[0_0_72px] pt-0.5 font-mono text-xs text-fg-subtle">{label}</dt>
      <dd className="m-0 flex-[1_1_220px]">{children}</dd>
    </div>
  );
}

export function FreelanceCard({ project }: { project: FreelanceProject }) {
  const { image } = project;
  return (
    <Card href={project.url} className="reveal flex min-w-0 flex-[1_1_380px] flex-col overflow-hidden">
      <div className="h-[clamp(190px,26vw,260px)] overflow-hidden border-b border-line">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes="(max-width: 800px) 100vw, 540px"
          className="block h-full w-full object-cover transition-transform duration-500 ease-out-soft group-hover/card:scale-[1.03]"
          style={{ objectPosition: image.position ?? "center top" }}
        />
      </div>
      <div className="flex flex-col gap-3.5 p-[clamp(22px,3vw,32px)]">
        <div className="flex flex-wrap justify-between gap-2 font-mono text-xs">
          <span className="text-fg-subtle">{project.category}</span>
          {project.status.tone === "live" ? (
            <span className="inline-flex items-center gap-2 text-accent">
              <StatusDot size={7} />
              {project.status.label}
            </span>
          ) : (
            <span className="text-amber">◐ {project.status.label}</span>
          )}
        </div>
        <Heading as="h3" level="sub" className="text-2xl">
          {project.name}
        </Heading>
        <p className="m-0 text-[15px] leading-relaxed text-fg-muted">{project.description}</p>
        <dl className="m-0 flex flex-col gap-2.5 border-t border-line pt-4">
          <DetailRow label="role">{project.role}</DetailRow>
          <DetailRow label="timeline">{project.timeline}</DetailRow>
          <DetailRow label="tools">
            <span className="flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <Tag key={t} className="py-1">
                  {t}
                </Tag>
              ))}
            </span>
          </DetailRow>
        </dl>
        <span className="inline-flex items-center gap-1.5 pt-1 font-mono text-[13px] text-accent">
          {project.domain}
          <Icon name="arrowUpRight" size={14} className="transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
        </span>
      </div>
    </Card>
  );
}
