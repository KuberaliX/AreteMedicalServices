'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about_us", label: "About Us" },
    { href: "/devices", label: "Devices" },
    { href: "/clinical_partners", label: "Clinical Partners" },
  ];

  const contactLink = { href: "/contact", label: "Contact Us" };
//
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900/95 shadow-lg z-50 border-b border-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-semibold text-sm uppercase tracking-wide ${
                  isActive(link.href)
                    ? "text-red-500 border-b-2 border-red-500 pb-1"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link href="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="//img1.wsimg.com/isteam/ip/f3e789ba-88da-4b82-bceb-4888b8d2b659/blob.png/:/rs=h:75,cg:true,m/qt=q:95" 
              alt="Arete" 
              className="h-12"
            />
          </Link>

          {/* Right - Contact Button */}
          <div className="flex items-center gap-6 ml-auto">
            <Link
              href={contactLink.href}
              className="hidden md:block px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              {contactLink.label}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-700 mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-2 rounded transition-colors font-semibold text-sm uppercase tracking-wide ${
                  isActive(link.href)
                    ? "text-red-500 bg-gray-800"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactLink.href}
              className="block py-2 px-2 rounded font-semibold text-sm uppercase tracking-wide bg-red-600 text-white hover:bg-red-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {contactLink.label}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

