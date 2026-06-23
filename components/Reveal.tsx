"use client";

import { useEffect, useRef } from "react";

let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("is-visible");
          sharedObserver?.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  return sharedObserver;
}

type Props = {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "li" | "section";
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getSharedObserver();
    if (!obs) return;
    obs.observe(el);
    return () => {
      obs.unobserve(el);
    };
  }, []);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const cls = `reveal ${className}`;

  if (as === "li") {
    return (
      <li
        ref={ref as React.RefObject<HTMLLIElement>}
        className={cls}
        style={style}
      >
        {children}
      </li>
    );
  }
  if (as === "section") {
    return (
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className={cls}
        style={style}
      >
        {children}
      </section>
    );
  }
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cls}
      style={style}
    >
      {children}
    </div>
  );
}
