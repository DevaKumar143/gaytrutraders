
"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiTruck,
  FiAward,
  FiPhone,
  FiMapPin,
  FiMessageCircle,
  FiHome,
  FiDroplet,
  FiTool,
  FiLayers,
  FiZap,
  FiChevronDown,
} from "react-icons/fi";

const Home = () => {
  const categories = [
    {
      title: "Tiles & Marble",
      description:
        "Beautiful floor tiles, wall tiles, and marble for every space.",
      icon: <FiLayers size={30} />,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Paints & Colors",
      description:
        "Quality paints and colors to give your walls a fresh look.",
      icon: <FiDroplet size={30} />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Hardware & Tools",
      description:
        "Reliable hardware products and tools for every project.",
      icon: <FiTool size={30} />,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Water Tanks",
      description:
        "Water storage tanks for homes, buildings, and businesses.",
      icon: <FiDroplet size={30} />,
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      title: "Plumbing Materials",
      description:
        "Pipes, fittings, and essential plumbing supplies.",
      icon: <FiHome size={30} />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Electrical Supplies",
      description:
        "Wires, switches, lights, and electrical accessories.",
      icon: <FiZap size={30} />,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const services = [
    {
      title: "Building Material Supply",
      description:
        "A wide range of construction and home improvement materials in one place.",
      icon: <FiTruck size={28} />,
    },
    {
      title: "Product Guidance",
      description:
        "Get help choosing suitable tiles, paints, hardware, and other materials.",
      icon: <FiCheckCircle size={28} />,
    },
    {
      title: "Home Improvement Solutions",
      description:
        "Find products for renovation, repairs, and new construction projects.",
      icon: <FiHome size={28} />,
    },
  ];

  const faqs = [
    {
      question: "What products are available at Gayatri Traders?",
      answer:
        "We offer tiles, marble, paints, hardware, water tanks, plumbing materials, electrical supplies, and other building materials.",
    },
    {
      question: "Do you provide materials for home construction?",
      answer:
        "Yes, you can contact us for materials needed for home construction, renovation, repairs, and other building projects.",
    },
    {
      question: "Can I ask for product prices on WhatsApp?",
      answer:
        "Yes. Contact us on WhatsApp with the product name, quantity, and specifications to ask about availability and pricing.",
    },
    {
      question: "Do you sell water tanks and plumbing materials?",
      answer:
        "Yes, we offer water tanks and plumbing supplies. Contact us to check the available sizes, types, and brands.",
    },
    {
      question: "Where is your shop located?",
      answer:
        "Our shop is located in Rampur Gaunaria on Hata Deoria Road, Uttar Pradesh, India.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-gray-950 md:min-h-[750px]">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Your Trusted Building Materials Store
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
              Build Your Dream
              <span className="mt-2 block text-orange-400">
                With Quality Materials
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              Discover quality tiles, paints, hardware, water tanks,
              plumbing materials, and electrical supplies at Gayatri Traders.
              Everything you need to build, improve, and transform your space.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Products
                <FiArrowRight size={20} />
              </Link>

              <a
                href="tel:+919369411724"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/60 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
              >
                Call Us
                <FiPhone size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-200">
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-orange-400" />
                Quality Products
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-orange-400" />
                Wide Product Range
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-orange-400" />
                Customer Support
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Shape */}
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black/20 to-transparent" />
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              About Gayatri Traders
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Everything You Need
              <span className="block text-orange-500">
                To Build Better
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Gayatri Traders is your destination for building materials
              and home improvement products in Rampur Gaunaria, Uttar Pradesh.
              From beautiful tiles and paints to hardware, water tanks,
              and plumbing supplies, we help you find materials for
              your construction and renovation needs.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are building a new home or upgrading an
              existing space, explore our product range and get
              assistance in choosing the right materials.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-7 py-4 font-semibold text-white transition hover:bg-orange-500"
            >
              Learn More About Us
              <FiArrowRight size={20} />
            </Link>
          </div>

          {/* About Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-gray-200">
              <img
                src="https://scontent.fbom3-4.fna.fbcdn.net/v/t39.30808-6/723654598_122106253352630548_5158646011249951592_n.jpg?stp=dst-jpg_tt6&cstp=mx720x1280&ctp=s720x1280&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=3XxbX7dgatIQ7kNvwHZ4hSw&_nc_oc=AdqAeQpTh5bLy4w_jyd_X6rQdMfZGo8A3aq3dy8UA91Qmm8OJA52OnEersmCAaKfRh13GDpyeLWj65TlU2Mmh9RP&_nc_zt=23&_nc_ht=scontent.fbom3-4.fna&_nc_gid=rRM6wXEfIXRXP2G9Q_62bw&_nc_ss=7b2a8&oh=00_AQLmxeOjTqXCaVb21g5L2qg_nd_UC_bffiAraWalSEKgfg&oe=6ABE7ECB"
                alt="Building materials and home improvement products"
                width="1200"
                height="800"
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-6 shadow-xl sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-orange-100 p-4 text-orange-600">
                  <FiAward size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Your Building Materials Partner
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Products for construction and home improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Our Products
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Explore Our Product Categories
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Find the materials you need for construction,
              renovation, and home improvement projects.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                href="/products"
                key={category.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
              >
                <div
                  className={`inline-flex rounded-2xl p-4 ${category.color}`}
                >
                  {category.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold transition group-hover:text-orange-500">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {category.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-500">
                  Explore Products
                  <FiArrowRight className="transition group-hover:translate-x-2" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              View All Products
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-gray-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Our Services
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We help homeowners, contractors, and builders find
              suitable products for their projects.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-orange-500"
              >
                <div className="inline-flex rounded-xl bg-orange-500/10 p-4 text-orange-400">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-400 hover:text-orange-300"
                >
                  Contact Us
                  <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Why Gayatri Traders
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              A Reliable Partner For Your Project
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-gray-50 p-8">
              <FiShield size={36} className="text-orange-500" />
              <h3 className="mt-5 text-xl font-bold">
                Quality Products
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Explore building materials and products from
                different brands and categories.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8">
              <FiLayers size={36} className="text-orange-500" />
              <h3 className="mt-5 text-xl font-bold">
                Wide Product Range
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Find tiles, paints, hardware, plumbing supplies,
                water tanks, and more in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8">
              <FiCheckCircle size={36} className="text-orange-500" />
              <h3 className="mt-5 text-xl font-bold">
                Customer Assistance
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Get help with product selection and enquiries
                for your construction needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500 px-8 py-14 text-white sm:px-14 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Planning Your Next Project?
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-orange-50">
                Contact Gayatri Traders for product availability,
                pricing, and assistance with your building
                material requirements.
              </p>
            </div>

            <a
              href="tel:+919369411724"
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-8 py-4 font-bold text-orange-600 transition hover:bg-gray-100"
            >
              Call Us
              <FiPhone size={20} />
            </a>

          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              FAQs
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Find answers to common questions about our
              products and services.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                  {faq.question}

                  <FiChevronDown
                    className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                    size={20}
                  />
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Contact Us
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Visit Our Store
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Visit Gayatri Traders in Rampur Gaunaria, Uttar Pradesh, or
              contact us for information about our products
              and availability.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-100 p-4 text-orange-600">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Our Address</h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    Rampur Gaunaria, Hata Deoria Road,
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-100 p-4 text-orange-600">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="mt-2 text-gray-600">
                    Contact us for product enquiries.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-8 py-4 font-semibold text-white transition hover:bg-orange-500"
            >
              Contact Our Team
              <FiArrowRight size={20} />
            </Link>
          </div>

          {/* Map */}
          <div className="min-h-[350px] overflow-hidden rounded-3xl bg-gray-100">
            <iframe
              title="Gayatri Traders store location"
              src="https://www.google.com/maps?q=Rampur+Gaunaria,+Hata+Deoria+Road,+Uttar+Pradesh,+India&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "350px", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>
      </section>

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      <a
        href="https://wa.me/919369411724"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
      >
        <FiMessageCircle size={28} />
      </a>

    </main>
  );
};

export default Home;
