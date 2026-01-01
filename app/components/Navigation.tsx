'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/devices", label: "Devices" },
    { href: "/research", label: "Research" },
    // { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];
//
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900 shadow-lg z-50 border-b border-gray-700">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex items-center h-24 lg:h-28 gap-6 lg:gap-10 xl:gap-12 w-full">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="https://img1.wsimg.com/isteam/ip/f3e789ba-88da-4b82-bceb-4888b8d2b659/blob.png/:/rs=h:75,cg:true,m/qt=q:95"
              alt="Arete Medical Services"
              width={200}
              height={75}
              className="h-12 lg:h-16 xl:h-20 w-auto"
              priority
            />
          </Link>
          
          {/* Navigation Links - Always visible on desktop, hidden on small mobile */}
          <div className="flex flex-1 items-center justify-end space-x-6 lg:space-x-8 xl:space-x-10 max-sm:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-semibold text-base lg:text-lg xl:text-xl uppercase tracking-wide whitespace-nowrap hover:scale-105 ${
                  isActive(link.href)
                    ? "text-white border-b-4 border-red-500 pb-2"
                    : "text-white hover:text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button - Only visible on small mobile screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden ml-auto text-white p-2 hover:bg-gray-800 rounded-md transition-colors flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Shows when hamburger is clicked on mobile only */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-gray-700 bg-gray-900">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold uppercase tracking-wide transition-colors ${
                    isActive(link.href)
                      ? "text-white bg-gray-800 border-l-4 border-red-500"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

