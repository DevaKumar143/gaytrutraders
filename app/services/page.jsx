"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
  FiMessageCircle,
  FiTruck,
  FiLayers,
  FiDroplet,
  FiTool,
  FiZap,
  FiHome,
  FiShield,
  FiPackage,
  FiChevronDown,
} from "react-icons/fi";

const ServicesPage = () => {
  const services = [
    {
      number: "01",
      title: "Tiles & Marble",
      subtitle: "Premium surfaces for beautiful spaces",
      description:
        "Explore floor tiles, wall tiles, bathroom tiles, kitchen tiles, marble-look surfaces, vitrified tiles and other decorative surfaces for residential and commercial spaces.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbDRcuj11fwApkm7YjqujPxrXmP1PDLAKF7VTkLxFm97HUa18V6X6bLcw&s=10",
      icon: <FiLayers size={28} />,
      features: [
        "Floor & wall tiles",
        "Vitrified tiles",
        "Bathroom & kitchen tiles",
        "Marble & premium finishes",
      ],
    },

    {
      number: "02",
      title: "Paints & Wall Finishes",
      subtitle: "Bring your walls to life",
      description:
        "Choose from interior and exterior paints, wall finishes, primers and related painting products for homes, offices and commercial projects.",
      image: "https://content.jdmagicbox.com/comp/wayanad/j7/9999p4936.4936.230226062146.a1j7/catalogue/unity-traders-paints-and-hardware-s-wayanad-paint-dealers-gseakvx5qx.jpg",
      icon: <FiDroplet size={28} />,
      features: [
        "Interior paints",
        "Exterior paints",
        "Wall finishes",
        "Primers & painting accessories",
      ],
    },

    {
      number: "03",
      title: "Hardware & Tools",
      subtitle: "Everything you need for the job",
      description:
        "Get essential hardware, hand tools, construction accessories and other products required for installation, repair and building work.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9koepu0jDh4rXMtuCjELeZOJCzqEkkIH3bztLCpM_cQ&s=10",
      icon: <FiTool size={28} />,
      features: [
        "Hand tools",
        "Construction hardware",
        "Fasteners & accessories",
        "Repair & installation tools",
      ],
    },

    {
      number: "04",
      title: "Water Tanks",
      subtitle: "Reliable water storage solutions",
      description:
        "Find water storage solutions for homes, apartments, shops and other properties. Ask our team about available tank sizes and options.",
      image: "https://www.studiomatrx.org/guides/choosing-water-tank-india/hero.jpg",
      icon: <FiPackage size={28} />,
      features: [
        "Residential water tanks",
        "Different storage capacities",
        "Water storage accessories",
        "Installation-related supplies",
      ],
    },

    {
      number: "05",
      title: "Plumbing Materials",
      subtitle: "Complete plumbing essentials",
      description:
        "Get pipes, fittings, valves, connectors and other plumbing materials for new installations, repairs and renovation projects.",
      image: "https://s7ap1.scene7.com/is/image/TslDXP/understanding-plumbing-material-types?fmt=webp-alpha",
      icon: <FiDroplet size={28} />,
      features: [
        "Pipes & fittings",
        "Valves & connectors",
        "Water supply accessories",
        "Repair materials",
      ],
    },

    {
      number: "06",
      title: "Electrical Supplies",
      subtitle: "Essential electrical products",
      description:
        "Find electrical accessories and supplies for residential, commercial and general construction requirements.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNe_quxY9rJzxeQi0s6yl_C3Blzv9HwV0StmWooO6D3A&s=10",
      icon: <FiZap size={28} />,
      features: [
        "Electrical wires",
        "Switches & sockets",
        "Lighting products",
        "Electrical accessories",
      ],
    },
  ];

  const benefits = [
    {
      icon: <FiShield size={26} />,
      title: "Quality Products",
      text: "We focus on reliable products suitable for construction and home improvement requirements.",
    },
    {
      icon: <FiLayers size={26} />,
      title: "Wide Product Range",
      text: "Tiles, paints, hardware, plumbing, water tanks and electrical products under one roof.",
    },
    {
      icon: <FiCheckCircle size={26} />,
      title: "Product Guidance",
      text: "Our team can help you understand product options and choose according to your project.",
    },
    {
      icon: <FiTruck size={26} />,
      title: "Project Requirements",
      text: "Contact us when you need multiple materials for construction or renovation work.",
    },
  ];

  const faqs = [
    {
      question: "What building materials do you provide?",
      answer:
        "We offer tiles, marble and surface products, paints, hardware, tools, water tanks, plumbing materials, electrical supplies and other construction-related products.",
    },
    {
      question: "Can I buy tiles for my complete home?",
      answer:
        "Yes. You can contact us with your requirements for living room, bedroom, kitchen, bathroom, balcony or other areas. Our team can help you explore suitable tile options.",
    },
    {
      question: "Do you provide water tanks?",
      answer:
        "Yes. We provide water-storage products and related accessories. Contact us to check available sizes, brands and current availability.",
    },
    {
      question: "Can I ask for a product quotation?",
      answer:
        "Yes. Send us the product name, quantity and required specifications through our contact or WhatsApp option and we can discuss your requirement.",
    },
    {
      question: "Do you supply products for contractors?",
      answer:
        "You can contact us with your project requirements. For larger requirements, share the product list and quantities so our team can discuss availability and supply.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="relative min-h-[580px] overflow-hidden bg-gray-950">
        <img
          src="qaulity.jpg"
          alt="Premium building materials showroom"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Building Materials & Home Improvement
            </span>
            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
              Quality Materials.
              <span className="block text-orange-400">
                Better Spaces.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              From premium tiles and paints to hardware, water tanks,
              plumbing and electrical supplies — find the materials
              you need for your next project at Gayatri Traders.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Products
                <FiArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
              >
                Contact Us
                <FiPhone />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                What We Offer
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Everything You Need
                <span className="block text-orange-500">
                  For Your Project
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Gayatri Traders brings together a wide range of building
                materials and home improvement products. Whether you
                are renovating one room, building a home or managing
                a larger project, we make it easier to explore the
                materials you need.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our product categories include tiles, paints, hardware,
                water tanks, plumbing materials, electrical supplies
                and more.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-gray-50 p-5">
                  <FiCheckCircle
                    className="text-orange-500"
                    size={25}
                  />
                  <p className="mt-3 font-semibold">
                    Wide Selection
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-5">
                  <FiShield
                    className="text-orange-500"
                    size={25}
                  />
                  <p className="mt-3 font-semibold">
                    Reliable Products
                  </p>
                </div>

              </div>

            </div>

            <div className="relative">
              <div className="relative h-[420px] overflow-hidden rounded-3xl">
                <img
                  src="https://scontent.fbom3-4.fna.fbcdn.net/v/t39.30808-6/723654598_122106253352630548_5158646011249951592_n.jpg?stp=dst-jpg_tt6&cstp=mx720x1280&ctp=s720x1280&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=3XxbX7dgatIQ7kNvwHZ4hSw&_nc_oc=AdqAeQpTh5bLy4w_jyd_X6rQdMfZGo8A3aq3dy8UA91Qmm8OJA52OnEersmCAaKfRh13GDpyeLWj65TlU2Mmh9RP&_nc_zt=23&_nc_ht=scontent.fbom3-4.fna&_nc_gid=rRM6wXEfIXRXP2G9Q_62bw&_nc_ss=7b2a8&oh=00_AQLmxeOjTqXCaVb21g5L2qg_nd_UC_bffiAraWalSEKgfg&oe=6ABE7ECB"
                  alt="Building materials showroom"
                  width="1200"
                  height="800"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white p-6 shadow-2xl sm:left-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-orange-100 p-4 text-orange-600">
                    <FiHome size={28} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      One destination
                    </p>

                    <p className="text-lg font-bold">
                      For your project
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Our Services
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Materials & Solutions
              <span className="block text-orange-500">
                For Every Space
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Explore our major product categories and find
              suitable materials for construction, renovation
              and home improvement.
            </p>

          </div>

          <div className="mt-16 space-y-10">

            {services.map((service, index) => (

              <div
                key={service.title}
                className={`group grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Image */}
                <div className="relative min-h-[320px] overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    width="1200"
                    height="800"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                    {service.number}
                  </span>

                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                  <div className="inline-flex w-fit rounded-xl bg-orange-100 p-4 text-orange-600">
                    {service.icon}
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    {service.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <FiCheckCircle
                          className="shrink-0 text-orange-500"
                        />

                        {feature}
                      </div>

                    ))}

                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex w-fit items-center gap-3 font-semibold text-orange-600 transition hover:gap-5"
                  >
                    Enquire About This
                    <FiArrowRight />
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT SUPPLY
      ====================================================== */}
      <section className="relative overflow-hidden bg-gray-950 px-6 py-20 md:py-28">

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Project Requirements
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Planning a Bigger
                <span className="block text-orange-400">
                  Construction Project?
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Share your material requirements with our team.
                Tell us what products you need, the approximate
                quantity and your project requirements.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Share your product list",
                  "Mention required quantities",
                  "Ask about product availability",
                  "Discuss your material requirements",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <FiCheckCircle className="text-orange-400" />
                    {item}
                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Discuss Your Requirement
                <FiArrowRight />
              </Link>

            </div>

            <div className="relative h-[420px] overflow-hidden rounded-3xl">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIKtQbU8n6tMfoRgh_oJKJ24Rfdwfkixp48wAbf82Yw&s=10"
                alt="Construction material supply"
                width="1200"
                height="800"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              More Than Just A Store
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We aim to make finding building materials simpler,
              more convenient and more transparent for our customers.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (

              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >

                <div className="inline-flex rounded-xl bg-orange-100 p-4 text-orange-600">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {benefit.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500">

          <div className="px-8 py-14 sm:px-14 md:py-20">

            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Have a Material Requirement?
                </h2>

                <p className="mt-4 leading-8 text-orange-50">
                  Contact Gayatri Traders and tell us what you are
                  looking for. Our team can help you with your
                  product enquiry.
                </p>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-7 py-4 font-semibold text-orange-600 transition hover:bg-gray-100"
                >
                  Contact Us
                  <FiArrowRight />
                </Link>

                <a
                  href="https://wa.me/919369411724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
                >
                  WhatsApp
                  <FiMessageCircle />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">

                  {faq.question}

                  <FiChevronDown
                    className="shrink-0 transition duration-300 group-open:rotate-180"
                    size={21}
                  />

                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <FiHome size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Let&apos;s Build Something Better
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Visit Gayatri Traders for building materials, home improvement
            products and project requirements in Rampur Gaunaria,
            Uttar Pradesh.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-8 py-4 font-semibold text-white transition hover:bg-orange-500"
          >
            Get In Touch
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default ServicesPage;
