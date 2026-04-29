"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — scroll-triggered fade-up wrapper using native IntersectionObserver.
 *
 * Tailwind v4 caveat (the same one that bit the hero): the
 * `motion-safe:` variant doesn't compose onto custom CSS animation
 * classes that live outside the `@theme` block. The previous version
 * used `motion-safe:opacity-0 motion-safe:animate-reveal-fade` and
 * the `motion-safe:animate-reveal-fade` half compiled to nothing,
 * leaving every section below the fold stuck at `opacity: 0`. We now
 * toggle a plain `reveal-pending` class for the initial hidden state
 * and swap to `animate-reveal-fade` once the IntersectionObserver
 * fires. prefers-reduced-motion is handled in globals.css with a
 * straight @media rule.
 *
 * Usage:
 *   <Reveal>
 *     <h2>Heading</h2>
 *   </Reveal>
 *
 *   <Reveal delay={120} as="li">    // optional cascade delay in ms
 *     ...
 *   </Reveal>
 */

interface RevealProps {
  children: React.ReactNode;
  /** Tag to render. Defaults to <div>. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Stagger delay in ms — useful when revealing siblings in a row. */
  delay?: number;
  /** Pass-through className merged with the reveal classes. */
  className?: string;
  /** rootMargin passed to IntersectionObserver. Default: -60px (fires
   *  slightly before the element fully enters the viewport). */
  rootMargin?: string;
}

export function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  rootMargin = "-60px",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (visible) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, visible]);

  const cls = [
    visible ? "animate-reveal-fade" : "reveal-pending",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cls}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
