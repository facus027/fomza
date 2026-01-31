import { useEffect, useState } from "react";

type Options = {
  threshold?: number; // px
};

export function useScrolled(options?: Options) {
  const threshold = options?.threshold ?? 12;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { isScrolled };
}
