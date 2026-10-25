import Image from "next/image";

type CaseFigureProps = { src: string; width: number; height: number; alt: string; caption: string; priority?: boolean };

export function CaseFigure({ src, width, height, alt, caption, priority }: CaseFigureProps) {
  return (
    <figure className="m-0 flex flex-col gap-3">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        sizes="(max-width: 900px) 100vw, 840px"
        className="block h-auto w-full rounded-2xl border border-line"
      />
      <figcaption className="font-mono text-xs text-fg-subtle">{caption}</figcaption>
    </figure>
  );
}
