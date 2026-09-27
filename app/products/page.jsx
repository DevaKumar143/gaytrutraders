"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiMessageCircle,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiTool,
  FiDroplet,
  FiHome,
  FiLayers,
  FiZap,
  FiPackage,
  FiPhone,
  FiStar,
} from "react-icons/fi";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: 1,
    name: "Premium Floor Tiles",
    category: "Tiles & Marble",
    description:
      "Durable and stylish flooring solutions for modern homes, offices and commercial spaces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVLIvbQTg6bbx3DQa6bzB3nPZNf8LJQIGnNIPhDEWlpvfgItObXP15pQ&s=10",
    features: ["Easy maintenance", "Multiple designs", "Long lasting"],
    badge: "Popular",
  },

  {
    id: 2,
    name: "Wall Tiles Collection",
    category: "Tiles & Marble",
    description:
      "Modern wall tiles designed to add a clean and elegant finish to your interiors.",
    image: "https://www.thespruce.com/thmb/SFALkYdz7rR9hpxT4NXtaEN6L4w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gorgeous-bathroom-tiles-1822618-hero-499f00e1edee40909d747a1f064a3156.jpg",
    features: ["Modern patterns", "Easy cleaning", "Premium finish"],
  },

  {
    id: 3,
    name: "Decorative Marble",
    category: "Tiles & Marble",
    description:
      "Elegant marble options for floors, walls, kitchens, staircases and premium interiors.",
    image: "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/di-2026-1769081758-Ayx2Q/jfm-1769081772-NQyUm/sd-1769082038-GiGv8/sd-13-1771241348-EKIqG.jpg",
    features: ["Elegant appearance", "Strong surface", "Premium look"],
    badge: "Premium",
  },

  {
    id: 4,
    name: "Interior Wall Paint",
    category: "Paints",
    description:
      "Quality interior paints available in a wide range of shades for beautiful living spaces.",
    image: "https://www.asenseinterior.com/assets/uploads/0548cbf8d49e491d24a07f302427c1e1.webp",
    features: ["Rich colours", "Smooth finish", "Easy application"],
  },

  {
    id: 5,
    name: "Exterior Paint",
    category: "Paints",
    description:
      "Protective exterior paint solutions designed for long-lasting walls and outdoor surfaces.",
    image: "https://nipponpaint.co.in/wp-content/uploads/2024/09/shutterstock_513242902-1038x711-1-1024x701.jpg",
    features: ["Weather protection", "Durable finish", "Multiple shades"],
  },

  {
    id: 6,
    name: "Hand Tools",
    category: "Hardware",
    description:
      "Essential tools for construction, repair, installation and everyday maintenance work.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfQ8sWbziGxd7eGlqvkaE1cnRLbdWHdoBzzhtGriNW0t1-tO37ZYzDyA&s=10",
    features: ["Strong construction", "Professional use", "Multiple sizes"],
    badge: "Essential",
  },

  {
    id: 7,
    name: "Power Tools",
    category: "Hardware",
    description:
      "Reliable power tools for drilling, cutting, grinding and other construction applications.",
    image: "https://www.idealpowertools.com/cdn/shop/articles/IMG_20260516_151738_1511e1dd-9ec4-465b-97ae-7699f3a9a0c3.png?v=1779190808&width=1500",
    features: ["High performance", "Reliable operation", "Professional grade"],
  },

  {
    id: 8,
    name: "Overhead Water Tank",
    category: "Water Tanks",
    description:
      "Strong and durable water storage tanks suitable for homes, buildings and commercial use.",
    image: "https://gsctanks.com/wp-content/uploads/2020/08/Residential-water-storage-tanks.jpg",
    features: ["Durable body", "Water storage", "Multiple capacities"],
    badge: "Best Seller",
  },

  {
    id: 9,
    name: "PVC Plumbing Pipes",
    category: "Plumbing",
    description:
      "Quality plumbing pipes and fittings for residential and commercial water systems.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzA1K6mbkwSnlU_s6ejHri7ClEmriTLjsVrRCpuuasw&s",
    features: ["Leak resistant", "Lightweight", "Easy installation"],
  },

  {
    id: 10,
    name: "Plumbing Fittings",
    category: "Plumbing",
    description:
      "A complete range of fittings and accessories for reliable plumbing installations.",
    image: "https://www.parklane.ph/wp/wp-content/uploads/2021/04/pipe-fittings.jpg",
    features: ["Multiple sizes", "Strong joints", "Easy fitting"],
  },

  {
    id: 11,
    name: "LED Lighting",
    category: "Electrical",
    description:
      "Energy-efficient LED lighting products for homes, shops, offices and commercial spaces.",
    image: "https://aarushielectrical.com/cdn/shop/articles/Energy-Efficient-Lighting-Solutions_cf54ada9-5d66-4b66-aaa9-41cfb0d858d5_1024x1024.jpg?v=1768892318",
    features: ["Energy efficient", "Bright illumination", "Long lifespan"],
    badge: "Popular",
  },

  {
    id: 12,
    name: "Switches & Sockets",
    category: "Electrical",
    description:
      "Reliable electrical accessories for modern residential and commercial installations.",
    image: "https://cdn.shopify.com/s/files/1/0206/8076/files/collection_banner_plugs-and-switches_1600x700_6560da68-6543-425d-8540-c34e16659c6d.jpg?v=1784565571",
    features: ["Modern design", "Safe operation", "Multiple styles"],
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    name: "All",
    icon: FiShoppingBag,
  },

  {
    name: "Tiles & Marble",
    icon: FiLayers,
  },

  {
    name: "Paints",
    icon: FiDroplet,
  },

  {
    name: "Hardware",
    icon: FiTool,
  },

  {
    name: "Water Tanks",
    icon: FiPackage,
  },

  {
    name: "Plumbing",
    icon: FiHome,
  },

  {
    name: "Electrical",
    icon: FiZap,
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   PAGE
========================================================= */

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    () => categories.some(({ name }) => name === categoryFromUrl)
      ? categoryFromUrl
      : "All",
  );

  useEffect(() => {
    setSelectedCategory(
      categories.some(({ name }) => name === categoryFromUrl)
        ? categoryFromUrl
        : "All",
    );
  }, [categoryFromUrl]);

  const [searchQuery, setSearchQuery] = useState("");

  const [openFaq, setOpenFaq] = useState(null);

  /* =========================================================
     FILTER PRODUCTS
  ========================================================= */

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-white text-gray-900">
      <section className="relative min-h-[75vh] overflow-hidden bg-gray-950">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <img
            src="https://img.staticmb.com/mbcontent/images/crop/uploads/ver2/XIwvQlc61t8ZIpanz4mAnTU1SakajKZkoFH52-ps7Mda-A/two-floor-small-village-house-design_0_1200.jpg"
            alt="Building materials products"
            width="1600"
            height="900"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24 lg:px-8">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >

            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <FiPackage className="text-orange-400" />

              Quality Products. Practical Solutions.
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
            >
              Everything You Need

              <span className="block text-orange-500">
                To Build Better.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg"
            >
              Explore our collection of building materials,
              finishing products, hardware, plumbing, electrical
              supplies and water storage solutions for residential
              and commercial projects.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                Our Collection
              </p>

              <h2 className="text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">

                Products selected for

                <span className="block text-orange-500">
                  real-world projects.
                </span>

              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Whether you are renovating a home, constructing
                a new property or handling a commercial project,
                our product range is designed to cover essential
                materials you need from one place.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Wide range of construction and finishing products",
                  "Options for residential and commercial projects",
                  "Products available in different sizes and specifications",
                  "Guidance to help you choose the right material",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <FiCheck size={14} />
                    </span>

                    <p className="text-gray-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPQP9CAdXWcCMlT8s4E9UnGhZFicCPBqqZpX4nbYh4g83r7_rgRv-H0c&s=10"
                  alt="Building materials showroom"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-2xl">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FiStar />
                  </div>

                  <div>

                    <p className="font-bold text-gray-950">
                      Quality Focused
                    </p>

                    <p className="text-sm text-gray-500">
                      Materials for every project
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PRODUCT CATALOGUE
      ========================================================= */}

      <section
        id="product-catalogue"
        className="scroll-mt-20 bg-gray-50 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Product Catalogue
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-950 sm:text-4xl lg:text-5xl">
              Find what your project needs
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Browse our main product categories and explore
              materials suitable for different construction and
              renovation needs.
            </p>
          </motion.div>
          <div className="mt-10 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const active =
                selectedCategory === category.name;
              return (

                <button
                  key={category.name}
                  onClick={() =>
                    setSelectedCategory(category.name)
                  }
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-gray-950 text-white shadow-lg"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:text-orange-600"
                  }`}
                >

                  <Icon size={17} />

                  {category.name}

                </button>

              );
            })}

          </div>

          {/* PRODUCT COUNT */}

          <div className="mt-8">

            <p className="text-sm text-gray-500">

              Showing{" "}

              <span className="font-semibold text-gray-900">
                {filteredProducts.length}
              </span>{" "}

              products

            </p>

          </div>

          {/* PRODUCT GRID */}

          <motion.div
            layout
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredProducts.map((product) => (

                <motion.article
                  key={product.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* PRODUCT IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                    <img
                      src={product.image}
                      alt={product.name}
                      width="800"
                      height="600"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                    {product.badge && (
                      <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                        {product.badge}
                      </div>
                    )}

                  </div>

                  {/* PRODUCT CONTENT */}

                  <div className="p-6">

                    <div className="mb-3 flex items-center justify-between gap-3">

                      <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                        {product.category}
                      </span>

                      <FiArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-orange-500" />

                    </div>

                    <h3 className="text-xl font-bold text-gray-950">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {product.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {product.features.map((feature) => (

                        <span
                          key={feature}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                        >
                          {feature}
                        </span>

                      ))}

                    </div>

                    <a
                      href={`https://wa.me/919369411724?text=${encodeURIComponent(`Hi, I’m interested in ${product.name} (${product.category}). Please share more details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-500"
                    >
                      Enquire on WhatsApp

                      <FiMessageCircle />
                    </a>

                  </div>

                </motion.article>

              ))}

            </AnimatePresence>

          </motion.div>

          {/* NO PRODUCTS */}

          {filteredProducts.length === 0 && (

            <div className="py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <FiSearch size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-950">
                No products found
              </h3>

              <p className="mt-2 text-gray-500">
                Try another product name or category.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =========================================================
          WHY CHOOSE OUR PRODUCTS
      ========================================================= */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: FiShield,
                title: "Quality Focus",
                text: "We focus on dependable materials suitable for everyday construction needs.",
              },

              {
                icon: FiPackage,
                title: "Wide Selection",
                text: "Explore multiple categories so you can source essential materials from one place.",
              },

              {
                icon: FiTool,
                title: "Project Support",
                text: "Get practical guidance when comparing products and specifications.",
              },

              {
                icon: FiShoppingBag,
                title: "Easy Enquiry",
                text: "Tell us what you need and our team can help with availability and requirements.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>

                </motion.div>

              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          PROJECT SUPPORT
      ========================================================= */}

      <section className="bg-gray-950 px-6 py-24 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Project Support
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">

                Not sure which product

                <span className="block text-orange-500">
                  is right for you?
                </span>

              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                Share your project requirements with us. Whether
                you are working on a new home, renovation, shop,
                office or larger construction project, we can help
                you identify the materials you may need.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Tell us about your project",
                  "Share your required products or quantities",
                  "Compare available options",
                  "Choose products according to your requirements",
                ].map((step, index) => (

                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-gray-200">
                      {step}
                    </p>

                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Discuss Your Requirement

                <FiArrowRight />
              </Link>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              <div className="relative aspect-square overflow-hidden rounded-[2rem]">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrmTdqDOqBFSVOZRDa0HT1x419DVmXu19ygfMr1wlodQkHHtWPABVNj_B&s=10"
                  alt="Construction materials for project"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

              </div>

              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

                <p className="text-sm text-gray-300">
                  Built around
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  Your Requirements
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Product FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-950 sm:text-4xl">
              Questions about our products?
            </h2>

          </div>

          <div className="mt-12 space-y-4">

            {[
              {
                question: "What types of products do you provide?",
                answer:
                  "We provide building and home-improvement materials across categories such as tiles and marble, paints, hardware, water tanks, plumbing materials and electrical supplies.",
              },

              {
                question: "Can I ask about product availability?",
                answer:
                  "Yes. Contact us with the product name, required quantity and specifications, and our team can help you check the available options.",
              },

              {
                question: "Do you support larger construction requirements?",
                answer:
                  "Yes. You can share your project requirements and quantities with our team so we can understand what materials you are looking for.",
              },

              {
                question: "Can you help me choose between products?",
                answer:
                  "Yes. If you are comparing different materials, sizes or specifications, you can discuss your requirement with our team before making a purchase decision.",
              },

              {
                question: "Do all products shown on this page remain available?",
                answer:
                  "Product availability, specifications and stock can change. Please contact us to confirm the current availability of a particular product.",
              },
            ].map((faq, index) => {

              const isOpen = openFaq === index;

              return (

                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >

                    <span className="font-semibold text-gray-950">
                      {faq.question}
                    </span>

                    <FiChevronDown
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-orange-500"
                          : ""
                      }`}
                    />

                  </button>

                  <AnimatePresence initial={false}>

                    {isOpen && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                      >

                        <p className="px-6 pb-6 leading-7 text-gray-600">
                          {faq.answer}
                        </p>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 pb-24 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-500 px-7 py-16 text-center sm:px-12"
        >

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

          <div className="relative">

            <FiShoppingBag
              className="mx-auto text-white"
              size={38}
            />

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for the right materials?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
              Tell us what you are building, renovating or repairing.
              We will help you explore the products that match your
              requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-4 font-semibold text-white transition hover:bg-gray-900"
              >
                Send an Enquiry

                <FiArrowRight />
              </Link>

              <a
                href="tel:+919369411724"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-gray-950"
              >
                <FiPhone />

                Call Us
              </a>

            </div>

          </div>

        </motion.div>

      </section>

      <a
        href="https://wa.me/919369411724"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
      >
        <FiMessageCircle size={25} />
      </a>

    </main>
  );
}
