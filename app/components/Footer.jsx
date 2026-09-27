"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
  FiDroplet,
  FiTool,
  FiHome,
} from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const products = [
    { name: "Tiles & Marble", category: "Tiles & Marble" },
    { name: "Paints & Colors", category: "Paints" },
    { name: "Hardware & Tools", category: "Hardware" },
    { name: "Water Tanks", category: "Water Tanks" },
    { name: "Plumbing Materials", category: "Plumbing" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-3xl font-bold text-white"
            >
              Gayatri <span className="text-blue-400">Traders</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Your trusted destination for quality tiles, paints,
              hardware, water tanks, plumbing materials, and
              construction supplies. We help you build better
              homes with reliable products.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://wa.me/919369411724"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600 hover:text-white"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm transition hover:text-blue-400"
                  >
                    <FiArrowUpRight />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Our Products
            </h3>

            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="text-sm transition hover:text-blue-400"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <FiMapPin
                  className="mt-1 shrink-0 text-blue-400"
                  size={20}
                />
                <span className="text-sm leading-6">
                  Rampur Gaunaria, Hata Deoria Road,
                  Uttar Pradesh, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone
                  className="shrink-0 text-blue-400"
                  size={20}
                />
                <a
                  href="tel:+919369411724"
                  className="text-sm transition hover:text-blue-400"
                >
                  +91 93694 11724
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail
                  className="shrink-0 text-blue-400"
                  size={20}
                />
                <a
                  href="mailto:hello@example.com"
                  className="break-all text-sm transition hover:text-blue-400"
                >
                  hello@example.com
                </a>
              </li>
            </ul>

            {/* Shop Categories */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <FiHome className="text-blue-400" />
                Building Materials
              </span>
              <span className="flex items-center gap-2">
                <FiTool className="text-blue-400" />
                Hardware
              </span>
              <span className="flex items-center gap-2">
                <FiDroplet className="text-blue-400" />
                Water Tanks
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Gayatri Traders.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
