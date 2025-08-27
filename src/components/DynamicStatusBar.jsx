// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// const DynamicStatusBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const newIsScrolled = scrollY > 150;

//       if (newIsScrolled !== isScrolled) {
//         setIsScrolled(newIsScrolled);

//         // Update theme-color meta tag for mobile status bar
//         const themeColorMeta = document.querySelector(
//           'meta[name="theme-color"]'
//         );
//         if (themeColorMeta) {
//           themeColorMeta.setAttribute(
//             "content",
//             newIsScrolled ? "#ffffff" : "#000000"
//           );
//         }

//         // Update Apple status bar style
//         const appleStatusBarMeta = document.querySelector(
//           'meta[name="apple-mobile-web-app-status-bar-style"]'
//         );
//         if (appleStatusBarMeta) {
//           appleStatusBarMeta.setAttribute(
//             "content",
//             newIsScrolled ? "default" : "black-translucent"
//           );
//         }

//         // Update MSApplication nav button color
//         const msNavButtonMeta = document.querySelector(
//           'meta[name="msapplication-navbutton-color"]'
//         );
//         if (msNavButtonMeta) {
//           msNavButtonMeta.setAttribute(
//             "content",
//             newIsScrolled ? "#ffffff" : "#000000"
//           );
//         }
//       }
//     };

//     // Set initial state on mount
//     handleScroll();

//     // Add scroll event listener with passive option for better performance
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isScrolled]);

//   // This component doesn't render anything visible
//   return null;
// };

// export default DynamicStatusBar;

"use client";

import { useEffect } from "react";

const DynamicStatusBar = () => {
  useEffect(() => {
    let isScrolled = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIsScrolled = scrollY > 150;

      if (newIsScrolled !== isScrolled) {
        isScrolled = newIsScrolled;

        // Update theme-color meta tag
        const themeColorMeta = document.querySelector(
          'meta[name="theme-color"]'
        );
        if (themeColorMeta) {
          themeColorMeta.setAttribute(
            "content",
            newIsScrolled ? "#ffffff" : "#000000"
          );
        }

        // Update Apple status bar style
        const appleStatusBarMeta = document.querySelector(
          'meta[name="apple-mobile-web-app-status-bar-style"]'
        );
        if (appleStatusBarMeta) {
          appleStatusBarMeta.setAttribute(
            "content",
            newIsScrolled ? "default" : "black-translucent"
          );
        }

        // Update MSApplication nav button color
        const msNavButtonMeta = document.querySelector(
          'meta[name="msapplication-navbutton-color"]'
        );
        if (msNavButtonMeta) {
          msNavButtonMeta.setAttribute(
            "content",
            newIsScrolled ? "#ffffff" : "#000000"
          );
        }

        console.log(`Status bar updated: ${newIsScrolled ? "white" : "black"}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array

  return null;
};

export default DynamicStatusBar;
