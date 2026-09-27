"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiChevronDown,
  FiPackage,
  FiTool,
  FiDroplet,
  FiHome,
  FiZap,
  FiLayers,
} from "react-icons/fi";


const page = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const category = form.get("category");
    const message = form.get("message");

    const whatsappMessage = `
Hello, I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Requirement: ${category || "General enquiry"}

Message:
${message}
    `;

    const whatsappUrl = `https://wa.me/919369411724?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/contact/contact-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/30" />

        <motion.div
          className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur">
              <FiMessageCircle />
              Let's Talk About Your Project
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Have a Project?
              <span className="block text-orange-500">
                Let's Build It Together.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Looking for tiles, marble, paints, hardware, plumbing,
              electrical products or water storage solutions? Tell us what
              you need and our team will help you find the right options.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="enquiry" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Tell Us What
              <span className="block text-orange-500">
                You Need.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you are working on a home renovation, new
              construction, commercial project or simply need a few
              materials, send us your requirement.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Share the products you are looking for.",
                "Mention approximate quantities where possible.",
                "Tell us about your project or application.",
                "Our team can guide you with available options.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <FiCheck size={14} />
                  </span>

                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-slate-950 p-7 text-white">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500">
                  <FiMessageCircle size={22} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Prefer WhatsApp?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Send your product list directly and start a
                    conversation with our team.
                  </p>

                  <a
                    href="https://wa.me/919369411724"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300"
                  >
                    Start WhatsApp Chat
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold text-orange-600">
                Quick Enquiry
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Send Your Requirement
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the details below. The enquiry will open in
                WhatsApp so you can continue the conversation easily.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Name *
                  </label>

                  <input
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number *
                  </label>

                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  What do you need?
                </label>

                <select
                  name="category"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Tiles & Marble">
                    Tiles & Marble
                  </option>
                  <option value="Paints">
                    Paints & Finishes
                  </option>
                  <option value="Hardware & Tools">
                    Hardware & Tools
                  </option>
                  <option value="Water Tanks">
                    Water Tanks
                  </option>
                  <option value="Plumbing">
                    Plumbing Materials
                  </option>
                  <option value="Electrical">
                    Electrical Products
                  </option>
                  <option value="Multiple Products">
                    Multiple Products
                  </option>
                  <option value="General Enquiry">
                    General Enquiry
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Requirement *
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about the products, quantity or project you are working on..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Send Enquiry on WhatsApp
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section id="location" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2">
          {/* MAP */}
          <div className="min-h-[450px]">
            <iframe
              src="https://www.google.com/maps?q=Rampur+Gaunaria,+Hata+Deoria+Road,+Uttar+Pradesh,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gayatri Traders location map"
            />
          </div>

          {/* LOCATION INFO */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Visit Our Location
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Come In And
              <span className="block text-orange-500">
                Let's Talk.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              If you prefer discussing your requirements in person, visit
              our location and speak with our team about your project and
              material requirements.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                <FiMapPin size={22} />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Shop Address
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Rampur Gaunaria,
                  <br />
                  Hata Deoria Road,
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="mt-7 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                <FiClock size={22} />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Business Hours
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Monday – Saturday
                  <br />
                  Please call before visiting for current timings.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=Rampur+Gaunaria,+Hata+Deoria+Road,+Uttar+Pradesh,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Get Directions
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default page;
