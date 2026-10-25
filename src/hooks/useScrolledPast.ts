"use client";

import { useEffect, useState } from "react";

/** True when the window has scrolled further than `offset` pixels. */
export function useScrolledPast(offset: number): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return past;
}
