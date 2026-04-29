"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — scroll-triggered fade-up wrapper using native IntersectionObserver.
 *
 * Replaces framer-motion's `whileInView` pattern with ~1 KB of code
 * instead of 118 KB. The element renders invisible (opacity 0,
 * translated down a few px); when it enters the viewport once, a CSS
 * animation plays in. Subsequent scroll-aways and scroll-backs do
 * nothing — matches `viewport={{ once: true }}` from the framer
 * version this is replacing.
 *
 * `prefers-reduced-motion` users skip the animation entirely (the
 * `animate-reveal-fade` utility is gated behind motion-safe in the
 * generated class string). They see the final state on first paint.
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
  /** Pass-through className merged with the animation utilities. */
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

  // We assemble the className manually instead of using cn() so this
  // component has zero non-React deps and stays under ~50 lines.
  const cls = [
    "motion-safe:opacity-0",
    visible && "motion-safe:animate-reveal-fade",
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
