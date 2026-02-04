'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ScrollManager() {
  const pathname = usePathname();
  const prevHistoryIndex = useRef(
    typeof window !== 'undefined' ? window.history.state?.idx : null
  );

  useEffect(() => {
    const currentIndex = window.history.state?.idx;

    const isBack =
      prevHistoryIndex.current !== null &&
      currentIndex < prevHistoryIndex.current;

    if (isBack) {
      const saved = sessionStorage.getItem(`scroll-${pathname}`);
      if (saved) {
        requestAnimationFrame(() => {
          window.scrollTo(0, Number(saved));
        });
      }
    }

    prevHistoryIndex.current = currentIndex;
  }, [pathname]);

  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(
        `scroll-${pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener('scroll', saveScroll);
    return () => window.removeEventListener('scroll', saveScroll);
  }, [pathname]);

  return null;
}
