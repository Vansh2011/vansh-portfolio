"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { IconButton } from "@/components/atoms/IconButton";
import { Toast } from "@/components/atoms/Toast";
import { NavLink } from "@/components/molecules/NavLink";
import { ScrollProgress } from "@/components/molecules/ScrollProgress";
import { easterEggs, navLinks, site } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const clicks = useRef(0);
  const toastTimer = useRef<number | undefined>(undefined);

  // Close the mobile menu on Escape or when the screen grows past the breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const onLogoClick = () => {
    clicks.current += 1;
    setOpen(false);
    setToast({ id: Date.now(), text: easterEggs[(clicks.current - 1) % easterEggs.length] });
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2800);
  };

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-20 animate-[drop_0.6s_ease-out_both] border-b border-line bg-ink/85 backdrop-blur-md">
        <Container>
          <nav aria-label="Main" className="flex min-h-16 items-center justify-between gap-4">
            <Link
              href="/#top"
              onClick={onLogoClick}
              title="psst… click me"
              className="inline-flex min-h-11 items-center font-mono text-[15px] font-medium text-fg"
            >
              <span className="text-accent">~/</span>vansh
            </Link>

            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((l) => (
                <NavLink key={l.href} href={l.href} label={l.label} />
              ))}
              <Button href={site.resume} icon="download" size="sm" download className="font-mono text-[13px]">
                resume.pdf
              </Button>
            </div>

            <IconButton
              icon={open ? "close" : "menu"}
              label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden"
            />
          </nav>
        </Container>

        {open && (
          <div id="mobile-menu" className="animate-drop border-t border-line md:hidden">
            <Container className="flex flex-col gap-1 pt-2 pb-6">
              {navLinks.map((l) => (
                <NavLink key={l.href} href={l.href} label={l.label} index={l.index} variant="stacked" onClick={close} />
              ))}
              <Button href={site.resume} icon="download" variant="primary" download onClick={close} className="mt-4">
                Download resume
              </Button>
            </Container>
          </div>
        )}

        <ScrollProgress />
      </header>

      {toast && <Toast key={toast.id} message={toast.text} />}
    </>
  );
}
