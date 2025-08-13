// "use client";

// import { useState, useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen((prev) => !prev);
//   }, []);

//   const closeMenu = useCallback(() => {
//     setIsMenuOpen(false);
//   }, []);

//   return (
//     <>
//       <nav className="bg-black text-white px-4 sm:px-6 relative">
//         <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
//           {/* Logo - optimized for mobile */}
//           <Link href="/" className="flex items-center" onClick={closeMenu}>
//             <Image
//               src="/images/infilpLogo.webp"
//               alt="Logo"
//               width={120}
//               height={30}
//               priority
//               className="w-auto h-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//             <Link
//               href="/spotlight"
//               className="text-white text-xl hover:text-red-400 transition-colors"
//               prefetch={false}
//             >
//               Spotlight
//             </Link>
//             <Link
//               href="/portfolio"
//               className="text-white text-xl hover:text-red-400 transition-colors"
//               prefetch={false}
//             >
//               Portfolio
//             </Link>
//             <Link
//               href="/about"
//               className="text-white text-xl hover:text-red-400 transition-colors"
//               prefetch={false}
//             >
//               About Us
//             </Link>
//           </div>

//           <div className="hidden md:block">
//             <Link
//               href="/contact"
//               className="bg-gradient-button hover:opacity-90 cursor-pointer text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full transition text-sm lg:text-base"
//               prefetch={false}
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Hamburger Button - optimized touch area */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 p-2 -mr-2"
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
//                 isMenuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay - optimized for performance */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-gradient-nav gradient-to-b bg-opacity-95 z-50 md:hidden">
//           <div className="flex flex-col h-full w-full">
//             {/* Header with Logo and Close Button */}
//             <div className="flex items-center justify-between p-4 sm:p-6">
//               <Link
//                 href="/"
//                 className="flex items-center space-x-2"
//                 onClick={closeMenu}
//               >
//                 <Image
//                   src="/images/infilpLogo.webp"
//                   alt="Logo"
//                   width={120}
//                   height={30}
//                   priority
//                   className="w-auto h-auto"
//                 />
//               </Link>

//               <button
//                 onClick={closeMenu}
//                 className="w-10 h-10 flex items-center justify-center p-2 -mr-2"
//                 aria-label="Close menu"
//               >
//                 <svg
//                   className="w-6 h-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Menu Items - optimized touch targets */}
//             <div className="flex flex-col items-center space-y-6 px-6 py-8">
//               <Link
//                 href="/spotlight"
//                 className="text-red-400 font-Manrope-medium text-2xl font-medium py-2"
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 Spotlight
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className="text-white text-2xl font-Manrope-medium hover:text-red-400 transition-colors py-2"
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 Portfolio
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-white text-2xl font-Manrope-medium hover:text-red-400 transition-colors py-2"
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/contact"
//                 className="relative bg-gradient-button hover:opacity-90 text-white flex items-center justify-center rounded-full text-[16px] transition-colors mt-4 w-[132px] h-[39px] text-center font-Manrope-medium"
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Decorative Circle */}
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//               <div className="w-24 h-24 sm:w-32 sm:h-32 border border-gray-700 rounded-full opacity-30"></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// "use client";

// import { useState, useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen((prev) => !prev);
//   }, []);

//   const closeMenu = useCallback(() => {
//     setIsMenuOpen(false);
//   }, []);

//   // Function to check if a link is active
//   const isActiveLink = (href) => {
//     // If we're on the home page ("/"), treat Spotlight as active by default
//     if (pathname === "/" && href === "/spotlight") {
//       return true;
//     }
//     // If no specific page is matched, default to Spotlight
//     if (
//       href === "/spotlight" &&
//       !pathname.match(/^\/(portfolio|about|contact)$/)
//     ) {
//       return pathname === "/" || pathname === href;
//     }
//     return pathname === href;
//   };

//   // Function to get link classes based on active state
//   const getLinkClasses = (href, baseClasses) => {
//     const isActive = isActiveLink(href);
//     return `${baseClasses} ${
//       isActive ? "text-red-400 font-bold" : "text-white hover:text-red-400"
//     } transition-colors`;
//   };

//   return (
//     <>
//       <nav className="bg-black text-white px-4 sm:px-6 relative">
//         <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
//           {/* Logo - optimized for mobile */}
//           <Link href="/" className="flex items-center" onClick={closeMenu}>
//             <Image
//               src="/images/infilpLogo.webp"
//               alt="Logo"
//               width={120}
//               height={30}
//               priority
//               className="w-auto h-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//             <Link
//               href="/spotlight"
//               className={getLinkClasses("/spotlight", "text-xl")}
//               prefetch={false}
//             >
//               Spotlight
//             </Link>
//             <Link
//               href="/portfolio"
//               className={getLinkClasses("/portfolio", "text-xl")}
//               prefetch={false}
//             >
//               Portfolio
//             </Link>
//             <Link
//               href="/about"
//               className={getLinkClasses("/about", "text-xl")}
//               prefetch={false}
//             >
//               About Us
//             </Link>
//           </div>

//           <div className="hidden md:block">
//             <Link
//               href="/contact"
//               className="bg-gradient-button hover:opacity-90 cursor-pointer text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full transition text-sm lg:text-base"
//               prefetch={false}
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Hamburger Button - optimized touch area */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 p-2 -mr-2"
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
//                 isMenuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay - optimized for performance */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-gradient-nav gradient-to-b bg-opacity-95 z-50 md:hidden">
//           <div className="flex flex-col h-full w-full">
//             {/* Header with Logo and Close Button */}
//             <div className="flex items-center justify-between p-4 sm:p-6">
//               <Link
//                 href="/"
//                 className="flex items-center space-x-2"
//                 onClick={closeMenu}
//               >
//                 <Image
//                   src="/images/infilpLogo.webp"
//                   alt="Logo"
//                   width={120}
//                   height={30}
//                   priority
//                   className="w-auto h-auto"
//                 />
//               </Link>

//               <button
//                 onClick={closeMenu}
//                 className="w-10 h-10 flex items-center justify-center p-2 -mr-2"
//                 aria-label="Close menu"
//               >
//                 <svg
//                   className="w-6 h-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Menu Items - optimized touch targets */}
//             <div className="flex flex-col items-center space-y-6 px-6 py-8">
//               <Link
//                 href="/spotlight"
//                 className={`text-2xl font-Manrope-medium py-2 ${
//                   isActiveLink("/spotlight")
//                     ? "text-red-400 font-bold"
//                     : "text-white hover:text-red-400"
//                 } transition-colors`}
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 Spotlight
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className={`text-2xl font-Manrope-medium py-2 ${
//                   isActiveLink("/portfolio")
//                     ? "text-red-400 font-bold"
//                     : "text-white hover:text-red-400"
//                 } transition-colors`}
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 Portfolio
//               </Link>
//               <Link
//                 href="/about"
//                 className={`text-2xl font-Manrope-medium py-2 ${
//                   isActiveLink("/about")
//                     ? "text-red-400 font-bold"
//                     : "text-white hover:text-red-400"
//                 } transition-colors`}
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/contact"
//                 className="relative bg-gradient-button hover:opacity-90 text-white flex items-center justify-center rounded-full text-[16px] transition-colors mt-4 w-[132px] h-[39px] text-center font-Manrope-medium"
//                 onClick={closeMenu}
//                 prefetch={false}
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Decorative Circle */}
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//               <div className="w-24 h-24 sm:w-32 sm:h-32 border border-gray-700 rounded-full opacity-30"></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Function to check if a link is active
  const isActiveLink = (href) => {
    // If we're on the home page ("/"), treat Spotlight as active by default
    if (pathname === "/" && href === "/spotlight") {
      return true;
    }
    // If no specific page is matched, default to Spotlight
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
    return `${baseClasses} ${
      isActive
        ? "text-prime font-Manrope-bold"
        : "text-white hover:text-[#f61a12] font-Manrope-medium"
    } transition-colors`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-transparent text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
          <Link
            href="/spotlight"
            className="flex items-center"
            onClick={closeMenu}
          >
            <Image
              src="/images/infilpLogo.webp"
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

          {/* Mobile Hamburger Button - optimized touch area */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - optimized for performance */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-nav gradient-to-b bg-opacity-95 z-50 md:hidden">
          <div className="flex flex-col h-full w-full">
            {/* Header with Logo and Close Button */}
            {/* <div className="flex items-center justify-between p-4 sm:p-6">
              <Link
                href="/spotlight"
                className="flex items-center space-x-2"
                onClick={closeMenu}
              >
                <Image
                  src="/images/infilpLogo.webp"
                  alt="Logo"
                  width={120}
                  height={30}
                  priority
                  className="w-auto h-auto"
                />
              </Link>

              <button
                onClick={closeMenu}
                className="w-10 h-10 flex items-center justify-center p-2 -mr-2 cursor-pointer"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> */}

            {/* Menu Items - optimized touch targets */}
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
