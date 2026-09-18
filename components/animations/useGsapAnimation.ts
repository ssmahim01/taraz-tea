"use client";

import { useLayoutEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapContext<T extends HTMLElement>(
  setup: (context: gsap.Context, el: T) => void,
  deps: unknown[] = []
): RefObject<T | null> {
  const scopeRef = useRef<T | null>(null);

  useLayoutEffect(() => {
    const el = scopeRef.current;

    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(
      (self) => {
        setup(self, el);
      },
      el
    );

    return () => {
      ctx.revert();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}

export { gsap, ScrollTrigger };