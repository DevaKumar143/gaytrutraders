"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-blue-600"
          aria-label="Gayatri Traders home"
        >
          {/* Replace this text wordmark with the supplied logo image later. */}
          Gayatri<span className="text-gray-900"> Traders</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <a
          href="tel:+919369411724"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-block"
        >
          Call Now
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+919369411724"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
