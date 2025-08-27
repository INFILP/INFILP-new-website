"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/" || pathname === "/spotlight";
  const isGlassyPage = pathname.startsWith("/portfolioDetail/");

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href) => {
    if (pathname === "/" && href === "/spotlight") {
      return true;
    }

    if (
      href === "/spotlight" &&
      !pathname.match(/^\/(portfolio|about|contact)$/)
    ) {
      return pathname === "/" || pathname === href;
    }
    return pathname === href;
  };

  const getLinkClasses = (href, baseClasses) => {
    const isActive = isActiveLink(href);

    const shouldUseScrollColors =
      isHomePage || isGlassyPage ? isScrolled && !isMenuOpen : true;
    const textColor = shouldUseScrollColors
      ? isActive
        ? "text-prime font-Manrope-bold"
        : "text-black hover:text-[#f61a12] font-Manrope-medium"
      : isActive
      ? "text-prime font-Manrope-bold"
      : "text-white hover:text-[#f61a12] font-Manrope-medium";

    return `${baseClasses} ${textColor} transition-colors`;
  };

  const getHamburgerClasses = () => {
    if (isMenuOpen) {
      return "w-6 h-0.5 transition-all duration-200 bg-white";
    }

    const shouldUseScrollColors =
      isHomePage || isGlassyPage ? isScrolled && !isMenuOpen : true;
    return `w-6 h-0.5 transition-all duration-200 ${
      shouldUseScrollColors ? "bg-black" : "bg-white"
    }`;
  };

  const getNavbarBackground = () => {
    if (isMenuOpen) {
      return "bg-black shadow-md";
    }

    if (isHomePage) {
      return isScrolled ? "bg-white shadow-md" : "bg-transparent";
    }

    if (isGlassyPage) {
      return isScrolled
        ? "bg-white shadow-md"
        : "bg-white/20 border-b border-white/10 shadow-sm";
    }

    return "bg-white shadow-md";
  };

  const getLogoSrc = () => {
    if (isMenuOpen) {
      return "/images/infilpLogo.webp";
    }

    if (isHomePage || isGlassyPage) {
      return isScrolled ? "/images/logoblack.png" : "/images/infilpLogo.webp";
    } else {
      return "/images/logoblack.png";
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] px-4 sm:px-6 transition-all duration-300 ${getNavbarBackground()}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-15 md:h-[4.5rem]">
          <Link
            href="/spotlight"
            className="flex items-center"
            onClick={closeMenu}
          >
            <Image
              src={getLogoSrc()}
              alt="Logo"
              width={116}
              height={54}
              priority
              className="w-auto h-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/spotlight"
              className={getLinkClasses("/spotlight", "text-xl")}
              prefetch={false}
            >
              Spotlight
            </Link>
            <Link
              href="/portfolio"
              className={getLinkClasses("/portfolio", "text-xl")}
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={getLinkClasses("/about", "text-xl")}
              prefetch={false}
            >
              About Us
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-button hover:opacity-90 cursor-pointer text-white flex items-center justify-center w-[145px] h-[46px] rounded-full transition text-sm md:text-lg font-Manrope-medium"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span
              className={`${getHamburgerClasses()} ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`${getHamburgerClasses()} ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`${getHamburgerClasses()} ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden">
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-col items-center space-y-6 px-6 py-8 mt-24">
              <Link
                href="/spotlight"
                className={`text-2xl font-Manrope-medium py-2 ${
                  isActiveLink("/spotlight")
                    ? "text-red-400 font-Manrope-bold"
                    : "text-white hover:text-red-400"
                } transition-colors`}
                onClick={closeMenu}
                prefetch={false}
              >
                Spotlight
              </Link>
              <Link
                href="/portfolio"
                className={`text-2xl font-Manrope-medium py-2 ${
                  isActiveLink("/portfolio")
                    ? "text-red-400 font-Manrope-bold"
                    : "text-white hover:text-red-400"
                } transition-colors`}
                onClick={closeMenu}
                prefetch={false}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className={`text-2xl font-Manrope-medium py-2 ${
                  isActiveLink("/about")
                    ? "text-red-400 font-Manrope-bold"
                    : "text-white hover:text-red-400"
                } transition-colors`}
                onClick={closeMenu}
                prefetch={false}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-button hover:opacity-90 text-white flex items-center justify-center rounded-full text-[16px] transition-colors mt-4 w-[132px] h-[39px] text-center font-Manrope-medium"
                onClick={closeMenu}
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-72 h-72 rounded-full border-[8px] border-transparent [background:conic-gradient(from_180deg,rgba(255,255,255,0.1)_0deg,rgba(255,255,255,0.1)_180deg,rgba(255,255,255,0.1)_360deg)] [mask:radial-gradient(farthest-side,transparent_calc(100%-8px),black_calc(100%-8px))]"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
