"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    year: "The Beginning",
    title: "A Vision Was Born",
    description:
      "From a heart burning with compassion, Ease with Yvonne was conceived — not as an organization, but as a calling. A calling to walk with the hurting, uplift the forgotten, and ignite purpose in the lost.",
  },
  {
    year: "The Mission",
    title: "Counseling & Guidance",
    description:
      "Yvonne began counseling individuals and families — helping them navigate grief, find direction, and rediscover hope. One conversation at a time, lives began to change.",
  },
  {
    year: "The Expansion",
    title: "Outreach & Community",
    description:
      "What started as one-on-one counseling grew into community-wide outreach: widows received support, schools were visited, orphanages were embraced with love and supplies.",
  },
  {
    year: "The Purpose",
    title: "Impacting Lives",
    description:
      "Today, Ease with Yvonne stands as a beacon — a reminder that when one person decides to serve, entire communities are transformed. The vision continues to grow.",
  },
];

const values = [
  {
    title: "Faith",
    description:
      "Every action is anchored in the belief that God is able. Faith is not just our foundation — it is our fuel.",
    icon: "✝",
  },
  {
    title: "Compassion",
    description:
      "We don't just help — we feel. Compassion means entering into someone's pain and walking with them toward healing.",
    icon: "♥",
  },
  {
    title: "Integrity",
    description:
      "What we do in private reflects who we are in public. Transparency and honesty guide every decision.",
    icon: "◆",
  },
  {
    title: "Service",
    description:
      "True greatness is found in service. We show up, we give freely, and we love without conditions.",
    icon: "★",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 bg-[#1A535C] text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-3"
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Ease with Yvonne
        </motion.h1>
      </section>

      {/* Founder Story */}
      <section className="py-20 sm:py-28 px-4 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-4">
                The Woman Behind the Vision
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1A535C] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Yvonne Maduemezia
              </h2>
              <div className="space-y-4 text-[#5A5A5A] leading-relaxed">
                <p>
                  An entrepreneur, an enlightener, and a woman whose life is a
                  testament to the goodness of God. Yvonne Maduemezia is the
                  founder of Ease with Yvonne Initiative (registration pending) and the creative mind
                  behind Yvonne Collection.
                </p>
                <p>
                  Born and raised in Ibusa, Delta State, Nigeria, Yvonne
                  attended the University of Nigeria, Nsukka, where her passion
                  for people and purpose began to take shape.
                </p>
                <p>
                  Her journey has been one of faith, resilience, and an
                  unyielding commitment to making a difference. From the
                  boardroom to the community, Yvonne brings grace, wisdom, and
                  an infectious warmth to everything she touches.
                </p>
                <p>
                  &ldquo;I believe every person deserves to be seen, heard, and
                  loved. That&apos;s not just my mission — it&apos;s my
                  purpose.&rdquo;
                </p>
              </div>
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
                  alt="Yvonne Maduemezia — Founder of Ease with Yvonne Initiative (registration pending)"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-[#D4AF37] rounded-br-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Location", value: "Asaba, Nigeria" },
              { label: "Hometown", value: "Ibusa, Delta State" },
              { label: "Education", value: "University of Nigeria, Nsukka" },
              { label: "Occupation", value: "Entrepreneur & Philanthropist" },
              { label: "Initiative", value: "Ease with Yvonne (registration pending)" },
              { label: "Brand", value: "Yvonne Collection" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 bg-[#FFF8F0] rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                <div>
                  <p className="text-[10px] text-[#B8860B] uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-medium text-[#1A535C]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 px-4 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-3">
              The Journey
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A535C]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How It All Began
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/30" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#FFF8F0] z-10" />

                {/* Content */}
                <div className={`flex-1 ml-16 sm:ml-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"}`}>
                  <p className="text-[10px] text-[#B8860B] uppercase tracking-wider mb-1">{item.year}</p>
                  <h3
                    className="text-lg font-bold text-[#1A535C] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">{item.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-3">
              What Guides Us
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A535C]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto mb-4 border border-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] text-xl">{val.icon}</span>
                </div>
                <h3
                  className="text-lg font-bold text-[#1A535C] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {val.title}
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Profiles */}
      <section className="py-16 px-4 bg-[#1A535C]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-6">
              Follow Her Journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/easewithyvonne"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-white text-sm">@easewithyvonne</span>
              </a>
              <a
                href="https://facebook.com/easewithyvonne"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-white text-sm">Ease W Yvonne</span>
              </a>
              <a
                href="https://wa.me/2347043793765"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-white text-sm">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 bg-[#FFF8F0] text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A535C] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Walk With Us
            </h2>
            <p className="text-[#5A5A5A] mb-8 max-w-lg mx-auto leading-relaxed">
              Every great movement starts with one person saying yes. Say yes to
              hope. Say yes to service. Say yes to making a difference.
            </p>
            <Link
              href="/ease/contact"
              className="inline-block px-8 py-4 bg-[#D4AF37] text-[#1A535C] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#E8D48B] transition-colors duration-500"
            >
              Join the Mission
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
