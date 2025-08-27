"use client";

import { useEffect } from "react";

const DynamicStatusBar = () => {
  useEffect(() => {
    let currentState = null;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 150;

      if (currentState !== isScrolled) {
        currentState = isScrolled;

        const themeColor = isScrolled ? "#ffffff" : "#000000";

        // Only update existing meta tag content
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) {
          themeMeta.setAttribute("content", themeColor);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default DynamicStatusBar;
