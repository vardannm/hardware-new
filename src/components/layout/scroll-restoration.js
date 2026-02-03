'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollManager() {
  const pathname = usePathname();

  // Restore scroll on mount / back
  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll-${pathname}`);
    if (saved) {
      window.scrollTo(0, Number(saved));
    }
  }, [pathname]);

  // Save scroll before leaving page
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(
        `scroll-${pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener('beforeunload', saveScroll);
    window.addEventListener('scroll', saveScroll);

    return () => {
      window.removeEventListener('beforeunload', saveScroll);
      window.removeEventListener('scroll', saveScroll);
    };
  }, [pathname]);

  return null;
}
