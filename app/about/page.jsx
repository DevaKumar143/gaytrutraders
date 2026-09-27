
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiHeart,
  FiShield,
  FiUsers,
  FiHome,
  FiTarget,
  FiAward,
  FiMessageCircle,
  FiPhone,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutPage = () => {
  const values = [
    {
      icon: <FiShield size={28} />,
      title: "Quality First",
      description:
        "We believe the right materials make a difference. We focus on offering products suitable for everyday construction, renovation and home improvement requirements.",
    },
    {
      icon: <FiUsers size={28} />,
      title: "Customer Focused",
      description:
        "Every project is different. We listen to customer requirements and help them explore products according to their space, needs and budget.",
    },
    {
      icon: <FiHeart size={28} />,
      title: "Built on Trust",
      description:
        "We aim to build long-term relationships with homeowners, contractors, builders and local customers through dependable service.",
    },
    {
      icon: <FiTarget size={28} />,
      title: "Practical Solutions",
      description:
        "Our goal is to make product selection easier by bringing different building-material categories together in one convenient place.",
    },
  ];

  const highlights = [
    "Tiles & marble",
    "Paints & wall finishes",
    "Hardware & tools",
    "Water tanks",
    "Plumbing materials",
    "Electrical supplies",
  ];

  const journey = [
    {
      number: "01",
      title: "Understand",
      description:
        "We first understand what you are building, renovating or repairing.",
    },
    {
      number: "02",
      title: "Explore",
      description:
        "We help you explore suitable products across our different categories.",
    },
    {
      number: "03",
      title: "Choose",
      description:
        "You can compare available options based on your project requirements.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "You take the materials forward and turn your plans into real spaces.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-gray-950">

        <Image
          src="/images/about/about-hero.jpg"
          alt="Premium building materials showroom"
          fill
          priority
          className="object-cover"
        />

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/about/about-hero.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >

            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              About Gayatri Traders
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl"
            >
              Building More Than
              <span className="block text-orange-400">
                Just Spaces.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg"
            >
              We are here to make finding the right building
              materials simpler, more convenient and more reliable
              for homeowners, contractors and businesses.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Our Products
                <FiArrowRight />
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="group relative h-[480px] overflow-hidden rounded-[2rem]">
                <img
                  src="https://www.barnomalainterior.com/images/top-quality-marble-and-granites-provider-in-dhaka.webp"
                  alt="Gayatri Traders building materials store"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/40 p-6 text-white backdrop-blur-md">

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-orange-500 p-3">
                      <FiHome size={25} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-300">
                        Our philosophy
                      </p>

                      <p className="font-semibold">
                        Better materials. Better spaces.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Your Local Partner
                <span className="block text-orange-500">
                  For Better Building
              </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Gayatri Traders is a building materials and home improvement
                destination serving customers in Rampur Gaunaria,
                Hata Deoria Road and surrounding areas.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our aim is simple: bring useful construction and
                home-improvement products closer to customers while
                making the buying experience straightforward.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                From choosing the finish for your new home to finding
                materials for repairs or renovation, we want customers
                to have a convenient place where they can explore
                different product categories.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <FiCheckCircle className="shrink-0 text-orange-500" />
                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BRAND STATEMENT
      ====================================================== */}
      <section className="bg-gray-950 px-6 py-20 md:py-28">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-5xl text-center"
        >

          <motion.div
            variants={fadeUp}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white"
          >
            <FiStar size={30} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-3xl font-semibold leading-relaxed text-white sm:text-4xl md:text-5xl"
          >
            “A home is not built with one product.
            <span className="text-orange-400">
              {" "}It is built with hundreds of thoughtful choices.
            </span>
            ”
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400"
          >
            That is why we bring different categories together —
            helping customers spend less time searching and more
            time creating the spaces they imagine.
          </motion.p>

        </motion.div>

      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              What We Believe
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Values Behind Our Work
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach is based on simple principles that guide
              how we serve customers and present our products.
            </p>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >

            {values.map((value) => (

              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >

                <div className="flex items-start gap-6">

                  <div className="shrink-0 rounded-2xl bg-orange-100 p-4 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    {value.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {value.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                From Your Idea
                <span className="block text-orange-500">
                  To Your Space
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Choosing building materials can sometimes feel
                overwhelming. Our approach is designed to make
                the process easier.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Start with your requirement, explore the available
                categories, understand your options and choose
                products that fit your project.
              </p>

              <a
                href="tel:+919369411724"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-7 py-4 font-semibold text-white transition hover:bg-orange-500"
              >
                Call Us
                <FiPhone />
              </a>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >

              {journey.map((step, index) => (

                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group flex gap-5 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SHOWROOM EXPERIENCE
      ====================================================== */}
      <section className="px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-3xl bg-gray-950 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative min-h-[420px]"
            >

              <img
                src="https://cdn-aps1.superfitout.com/blog-assets/images/blog-59-interior-design-material.webp"
                alt="Gayatri Traders showroom"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center p-8 sm:p-12 lg:p-16"
            >

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                The Experience
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                A Place To Explore
                <span className="block text-orange-400">
                  Your Possibilities
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Materials are easier to choose when you can compare
                different styles, finishes, categories and options.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                We want your visit to be practical and comfortable —
                whether you already know what you want or are still
                exploring ideas for your project.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Visit Us
                <FiArrowRight />
              </Link>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATION
      ====================================================== */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-2"
          >

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Find Us
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Come Visit
                <span className="block text-orange-500">
                  Gayatri Traders
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Visit our store in Rampur Gaunaria, Uttar Pradesh and
                explore the products available for your construction,
                renovation and home improvement requirements.
              </p>

              <div className="mt-8 flex items-start gap-4">

                <div className="rounded-xl bg-orange-100 p-4 text-orange-600">
                  <FiMapPin size={25} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Store Address
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    Rampur Gaunaria, Hata Deoria Road,
                    Uttar Pradesh, India
                  </p>
                </div>

              </div>

              <a
                href="tel:+919369411724"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-7 py-4 font-semibold text-white transition hover:bg-orange-500"
              >
                Call Us
                <FiPhone />
              </a>

            </div>

            <div className="min-h-[350px] overflow-hidden rounded-3xl bg-gray-200 shadow-lg">

              <iframe
                title="Gayatri Traders location"
                src="https://www.google.com/maps?q=Rampur+Gaunaria,+Hata+Deoria+Road,+Uttar+Pradesh,+India&output=embed"
                width="100%"
                height="100%"
                style={{
                  minHeight: "350px",
                  border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 py-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-orange-500 px-8 py-14 text-center sm:px-14 md:py-20"
        >

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white">
            <FiAward size={30} />
          </div>

          <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Building Something New?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
            Tell us what you are working on. Whether it is a new
            home, renovation, repair or commercial project, we are
            here to help you explore the materials you need.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-gray-100"
            >
              Explore Products
              <FiArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
            >
              Talk To Us
              <FiMessageCircle />
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
};

export default AboutPage;
