"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Counseling",
    description:
      "Guiding individuals through life's challenges with empathy, wisdom, and faith. We offer a safe space, confidential within community limits, for those seeking direction, healing, and clarity in every season of life. Our care is community and spiritual support, not licensed counseling.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Widows Outreach",
    description:
      "Standing with widows through emotional support, practical assistance, and community. No one should walk through loss alone. We are here, and we care.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "School Outreach",
    description:
      "Investing in the next generation through mentorship, educational support, and character building. Every child deserves someone who believes in their future.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.275-13.586C5.185 4.34 6.883 3.75 8.25 3.75h7.5c1.367 0 3.065.59 4.463 2.811A50.566 50.566 0 0019.74 10.147M12 20.904V3.75" />
      </svg>
    ),
  },
  {
    title: "Orphanage Visitation",
    description:
      "Bringing joy, love, and essential supplies to children in orphanages. Every child is a gift from God, and every visit is a reminder that they are seen and valued.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Sanctuary Visit",
    description:
      "Creating moments of peace and spiritual renewal for those in need of rest. A sanctuary is more than a place. It is a promise of safety, hope, and quiet comfort.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

const impactStats = [
  { number: "20+", label: "Lives Touched" },
  { number: "5+", label: "Widows Supported" },
  { number: "20+", label: "Children Reached" },
  { number: "10+", label: "Families Counseled" },
];

export default function EaseHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A535C] via-[#1A535C]/95 to-[#0F3D42]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        </div>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="relative w-28 h-28 mx-auto mb-8">
              <Image
                src="/images/god-is-able-logo.jpg"
                alt="God is Able"
                fill
                sizes="112px"
                className="object-contain rounded-full"
              />
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ease with Yvonne
            </h1>
            <p className="text-sm sm:text-base tracking-[0.4em] text-[#D4AF37] uppercase mb-8">
              Initiative (registration pending)
            </p>

            <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mb-8" />

            <p
              className="text-lg sm:text-xl text-white/80 mb-6 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Impacting lives. Building a happy and fulfilled generation.
            </p>
            <p className="text-sm text-white/50 max-w-lg mx-auto leading-relaxed mb-12">
              Through counseling, outreach, and community service, we are dedicated to
              creating a better version of oneself, one life at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ease/programs"
                className="inline-block px-8 py-4 bg-[#D4AF37] text-[#1A535C] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#E8D48B] transition-colors duration-500"
              >
                Our Programs
              </Link>
              <Link
                href="/ease/about"
                className="inline-block px-8 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-500"
              >
                Meet Yvonne
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Motto at bottom — matches store hero treatment */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-[#D4AF37]/70 uppercase italic whitespace-nowrap"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          God is Able
        </motion.p>
      </section>

      {/* Vision Statement */}
      <section className="py-20 sm:py-28 px-4 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-4">
              Our Vision
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A535C] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building happy and fulfilled generation.
              <br />
              <span className="text-[#D4AF37]">A better version of oneself.</span>
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
            <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed max-w-2xl mx-auto">
              We believe that every person carries within them the potential for transformation.
              Through faith, community, and intentional service, we walk alongside individuals
              as they discover their purpose, heal from their pain, and step into the life
              they were created to live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-[#1A535C]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-3xl sm:text-4xl font-bold text-[#D4AF37]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-white/60 mt-2 tracking-wider uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars / Programs */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-3"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-[#1A535C]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Pillars
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#FFF8F0] rounded-xl border border-[#E8DFD0] hover:border-[#D4AF37]/50 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A535C]/10 flex items-center justify-center text-[#1A535C] mb-5 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {pillar.icon}
                </div>
                <h3
                  className="text-lg font-bold text-[#1A535C] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/ease/programs"
              className="inline-block px-8 py-3 border border-[#1A535C] text-[#1A535C] text-sm tracking-[0.2em] uppercase hover:bg-[#1A535C] hover:text-white transition-all duration-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Preview */}
      <section className="py-20 sm:py-28 px-4 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-4">
                The Founder
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1A535C] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Meet <span className="text-[#D4AF37]">Yvonne</span>
              </h2>
              <div className="space-y-4 text-[#5A5A5A] leading-relaxed">
                <p>
                  An entrepreneur. An enlightener. A woman driven by faith and the
                  unwavering belief that every life matters.
                </p>
                <p>
                  Yvonne Maduemezia founded Ease with Yvonne from a deep conviction:
                  that true success is measured not by what you accumulate, but by
                  how many lives you touch along the way.
                </p>
                <p>
                  From counseling the brokenhearted to visiting orphanages, from
                  standing with widows to mentoring the next generation — Yvonne
                  lives her purpose every single day.
                </p>
              </div>
              <Link
                href="/ease/about"
                className="inline-block mt-8 px-8 py-3 bg-[#D4AF37] text-[#1A535C] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#E8D48B] transition-colors duration-500"
              >
                Read Her Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/ease-with-yvonne.jpg"
                  alt="Yvonne Maduemezia — Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-[#D4AF37] rounded-br-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose Quote */}
      <section className="py-20 sm:py-28 px-4 bg-[#1A535C] text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-6">
              Our Purpose
            </p>
            <p
              className="text-2xl sm:text-3xl lg:text-4xl text-white italic leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              &ldquo;Impacting lives... one heart at a time.&rdquo;
            </p>
            <div className="w-12 h-px bg-[#D4AF37]/50 mx-auto mb-6" />
            <p className="text-sm text-white/50 italic" style={{ fontFamily: "var(--font-heading)" }}>
              God is Able
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 bg-[#FFF8F0]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A535C] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Be Part of the Mission
            </h2>
            <p className="text-[#5A5A5A] mb-8 max-w-lg mx-auto leading-relaxed">
              Whether through volunteering, donating, or simply sharing our story —
              every action counts. Join us in building a world where no one walks alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ease/contact"
                className="inline-block px-8 py-4 bg-[#1A535C] text-white text-sm tracking-[0.2em] uppercase hover:bg-[#0F3D42] transition-colors duration-500 font-medium"
              >
                Get Involved
              </Link>
              <a
                href="https://wa.me/2347043793765?text=Hi%20Yvonne!%20I%27d%20like%20to%20support%20Ease%20with%20Yvonne."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-[#1A535C] text-[#1A535C] text-sm tracking-[0.2em] uppercase hover:bg-[#1A535C] hover:text-white transition-all duration-500"
              >
                Contact Yvonne
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
