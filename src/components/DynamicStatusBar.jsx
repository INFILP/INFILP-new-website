// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { usePathname } from "next/navigation";

// // // const DynamicStatusBar = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollY = window.scrollY;
// // //       const newIsScrolled = scrollY > 150;

// // //       if (newIsScrolled !== isScrolled) {
// // //         setIsScrolled(newIsScrolled);

// // //         // Update theme-color meta tag for mobile status bar
// // //         const themeColorMeta = document.querySelector(
// // //           'meta[name="theme-color"]'
// // //         );
// // //         if (themeColorMeta) {
// // //           themeColorMeta.setAttribute(
// // //             "content",
// // //             newIsScrolled ? "#ffffff" : "#000000"
// // //           );
// // //         }

// // //         // Update Apple status bar style
// // //         const appleStatusBarMeta = document.querySelector(
// // //           'meta[name="apple-mobile-web-app-status-bar-style"]'
// // //         );
// // //         if (appleStatusBarMeta) {
// // //           appleStatusBarMeta.setAttribute(
// // //             "content",
// // //             newIsScrolled ? "default" : "black-translucent"
// // //           );
// // //         }

// // //         // Update MSApplication nav button color
// // //         const msNavButtonMeta = document.querySelector(
// // //           'meta[name="msapplication-navbutton-color"]'
// // //         );
// // //         if (msNavButtonMeta) {
// // //           msNavButtonMeta.setAttribute(
// // //             "content",
// // //             newIsScrolled ? "#ffffff" : "#000000"
// // //           );
// // //         }
// // //       }
// // //     };

// // //     // Set initial state on mount
// // //     handleScroll();

// // //     // Add scroll event listener with passive option for better performance
// // //     window.addEventListener("scroll", handleScroll, { passive: true });

// // //     // Cleanup on unmount
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, [isScrolled]);

// // //   // This component doesn't render anything visible
// // //   return null;
// // // };

// // // export default DynamicStatusBar;

// // "use client";

// // import { useEffect } from "react";

// // const DynamicStatusBar = () => {
// //   useEffect(() => {
// //     let isScrolled = false;

// //     const handleScroll = () => {
// //       const scrollY = window.scrollY;
// //       const newIsScrolled = scrollY > 150;

// //       if (newIsScrolled !== isScrolled) {
// //         isScrolled = newIsScrolled;

// //         // Update theme-color meta tag
// //         const themeColorMeta = document.querySelector(
// //           'meta[name="theme-color"]'
// //         );
// //         if (themeColorMeta) {
// //           themeColorMeta.setAttribute(
// //             "content",
// //             newIsScrolled ? "#ffffff" : "#000000"
// //           );
// //         }

// //         // Update Apple status bar style
// //         const appleStatusBarMeta = document.querySelector(
// //           'meta[name="apple-mobile-web-app-status-bar-style"]'
// //         );
// //         if (appleStatusBarMeta) {
// //           appleStatusBarMeta.setAttribute(
// //             "content",
// //             newIsScrolled ? "default" : "black-translucent"
// //           );
// //         }

// //         // Update MSApplication nav button color
// //         const msNavButtonMeta = document.querySelector(
// //           'meta[name="msapplication-navbutton-color"]'
// //         );
// //         if (msNavButtonMeta) {
// //           msNavButtonMeta.setAttribute(
// //             "content",
// //             newIsScrolled ? "#ffffff" : "#000000"
// //           );
// //         }

// //         console.log(`Status bar updated: ${newIsScrolled ? "white" : "black"}`);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll, { passive: true });

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []); // Empty dependency array

// //   return null;
// // };

// // export default DynamicStatusBar;

"use client";

import { useEffect } from "react";

const DynamicStatusBar = () => {
  useEffect(() => {
    // Detect iOS devices
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone;

    let currentState = null;

    const updateStatusBar = (isScrolled) => {
      const themeColor = isScrolled ? "#ffffff" : "#000000";
      const statusBarStyle = isScrolled ? "default" : "black-translucent";

      // Method 1: CSS overlay approach (most reliable for iOS)
      const overlay = document.getElementById("status-bar-overlay");
      if (overlay) {
        if (isScrolled) {
          overlay.classList.add("scrolled");
        } else {
          overlay.classList.remove("scrolled");
        }
      }

      if (isIOS) {
        // Method 2: Force recreation of theme-color meta tag
        const existingThemeMeta = document.querySelector(
          'meta[name="theme-color"]'
        );
        if (existingThemeMeta) {
          existingThemeMeta.remove();
        }

        const newThemeMeta = document.createElement("meta");
        newThemeMeta.setAttribute("name", "theme-color");
        newThemeMeta.setAttribute("content", themeColor);
        document.head.appendChild(newThemeMeta);

        // Method 3: Update apple status bar style
        const existingAppleMeta = document.querySelector(
          'meta[name="apple-mobile-web-app-status-bar-style"]'
        );
        if (existingAppleMeta) {
          existingAppleMeta.remove();
        }

        const newAppleMeta = document.createElement("meta");
        newAppleMeta.setAttribute(
          "name",
          "apple-mobile-web-app-status-bar-style"
        );
        newAppleMeta.setAttribute("content", statusBarStyle);
        document.head.appendChild(newAppleMeta);

        // Method 4: For PWA - try to trigger a refresh
        if (isStandalone) {
          // Update manifest link to force refresh
          const manifestLink = document.querySelector('link[rel="manifest"]');
          if (manifestLink) {
            const href = manifestLink.getAttribute("href");
            manifestLink.setAttribute("href", href + "?t=" + Date.now());
          }
        }

        // Method 5: Force a minimal DOM change to trigger iOS update
        document.documentElement.style.backgroundColor = themeColor;
        setTimeout(() => {
          document.documentElement.style.backgroundColor = "";
        }, 10);
      } else {
        // Android - simple update
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) {
          themeMeta.setAttribute("content", themeColor);
        }
      }

      // Update other meta tags for completeness
      const msNavMeta = document.querySelector(
        'meta[name="msapplication-navbutton-color"]'
      );
      if (msNavMeta) {
        msNavMeta.setAttribute("content", themeColor);
      }

      console.log(
        `Status bar updated: ${
          isScrolled ? "white" : "black"
        } | iOS: ${isIOS} | PWA: ${isStandalone}`
      );
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 150;

      if (currentState !== isScrolled) {
        currentState = isScrolled;

        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
          updateStatusBar(isScrolled);
        });
      }
    };

    // Initial setup
    handleScroll();

    // Throttled scroll listener
    let scrollTimeout;
    const throttledScroll = () => {
      if (scrollTimeout) return;

      scrollTimeout = requestAnimationFrame(() => {
        handleScroll();
        scrollTimeout = null;
      });
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    // Additional iOS-specific listeners
    if (isIOS) {
      // Handle orientation changes
      window.addEventListener("orientationchange", () => {
        setTimeout(() => handleScroll(), 300);
      });

      // Handle page visibility changes (important for PWAs)
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
          setTimeout(() => handleScroll(), 100);
        }
      });

      // Handle focus events (when returning to app)
      window.addEventListener("focus", () => {
        setTimeout(() => handleScroll(), 100);
      });
    }

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (isIOS) {
        window.removeEventListener("orientationchange", handleScroll);
        document.removeEventListener("visibilitychange", handleScroll);
        window.removeEventListener("focus", handleScroll);
      }
    };
  }, []);

  return null;
};

export default DynamicStatusBar;
