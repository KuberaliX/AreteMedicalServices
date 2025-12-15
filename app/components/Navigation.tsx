'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/devices", label: "Devices" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900 shadow-lg z-50 border-b border-gray-700">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex items-center h-24 lg:h-28 gap-8 lg:gap-12 xl:gap-16">
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
          
          {/* Navigation Links - Always visible on all screen sizes */}
          <div className="flex space-x-6 lg:space-x-8 xl:space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-semibold text-base lg:text-lg xl:text-xl uppercase tracking-wide whitespace-nowrap hover:scale-105 ${
                  isActive(link.href)
                    ? "text-white border-b-4 border-red-500 pb-2"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

