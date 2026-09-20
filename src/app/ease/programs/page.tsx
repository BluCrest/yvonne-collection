"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    id: "counseling",
    title: "Counseling",
    subtitle: "Guiding Hearts Toward Healing",
    description:
      "Life can be overwhelming. Grief, confusion, heartbreak and uncertainty are real, and they matter. Our counseling program offers a safe space, confidential within community limits, where individuals and families can find clarity, comfort and direction through community and spiritual support. This is not licensed medical, psychological or legal counseling.",
    details: [
      "One-on-one support conversations",
      "Family and relationship guidance",
      "Grief and loss support",
      "Purpose discovery coaching",
      "Crisis support and referral to professionals",
      "Spiritual mentorship",
    ],
    who: "Anyone navigating life transitions, loss, relationship challenges, or seeking personal growth.",
    color: "from-[#1A535C] to-[#0F3D42]",
  },
  {
    id: "widows",
    title: "Widows Outreach",
    subtitle: "Standing With Those Who Stand Alone",
    description:
      "The loss of a spouse is one of life's deepest wounds. Our widows outreach program offers emotional support, practical assistance and warm fellowship, so that no widow has to feel forgotten.",
    details: [
      "Monthly visitation and check-ins",
      "Practical assistance and food supplies",
      "Emotional and spiritual support groups",
      "Skills acquisition training",
      "Children's educational support",
      "Community fellowship events",
    ],
    who: "Widows and bereaved spouses in need of support, companionship, and practical help.",
    color: "from-[#8B4513] to-[#6B3410]",
  },
  {
    id: "schools",
    title: "School Outreach",
    subtitle: "Investing in Tomorrow's Leaders",
    description:
      "Every child carries a spark of potential. Our school outreach program nurtures that potential through mentorship, educational support and character development. We visit schools, share wisdom and remind every child that their future matters.",
    details: [
      "School visits and motivational talks",
      "Educational materials and supplies donation",
      "Career guidance and mentorship",
      "Character and values education",
      "Guidance on scholarships and study support",
      "Teacher appreciation initiatives",
    ],
    who: "Pupils and students of some schools in Delta State. Reaching further is our goal.",
    color: "from-[#2E7D32] to-[#1B5E20]",
  },
  {
    id: "orphanage",
    title: "Orphanage Visitation",
    subtitle: "Love Without Borders",
    description:
      "Every child is a gift from God. Our orphanage visitation program brings love, joy and essential supplies to children in care homes. We do more than visit. We build relationships, remember names and return, because every child deserves to be seen.",
    details: [
      "Regular visits with gifts and supplies",
      "Interactive play and bonding sessions",
      "Educational support and tutoring",
      "Holiday celebrations and events",
      "Health and hygiene awareness",
      "Advocacy for child welfare",
    ],
    who: "Children in orphanages and care homes in Delta State.",
    color: "from-[#D4AF37] to-[#B8960F]",
  },
  {
    id: "sanctuary",
    title: "Sanctuary Visit",
    subtitle: "A Place of Rest and Renewal",
    description:
      "Sometimes, you just need a moment of peace. Our sanctuary visit program creates quiet spaces for spiritual renewal and emotional rest, for all who feel weary or overwhelmed and for all who seek gentle comfort.",
    details: [
      "Guided prayer and meditation sessions",
      "Spiritual retreats and quiet days",
      "Community worship gatherings",
      "Hospital and hospice visits",
      "Prison ministry and rehabilitation support",
      "Elderly care home visitation",
    ],
    who: "Anyone seeking spiritual renewal, comfort, or a moment of divine rest.",
    color: "from-[#4A148C] to-[#311B92]",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 bg-[#1A535C] text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-3"
        >
          Our Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Programs & Outreach
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 mt-4 text-sm max-w-lg mx-auto"
        >
          Five pillars of impact. One mission: changing lives through faith, love, and service.
        </motion.p>
      </section>

      {/* Programs */}
      <section className="bg-[#FFF8F0]">
        {programs.map((program, i) => (
          <div
            key={program.id}
            className={`py-20 sm:py-28 px-4 ${i % 2 === 0 ? "bg-white" : "bg-[#FFF8F0]"}`}
          >
            <div className="max-w-5xl mx-auto">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:direction-rtl" : ""
              }`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-3">
                    {program.subtitle}
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-[#1A535C] mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {program.title}
                  </h2>
                  <p className="text-[#5A5A5A] leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-[#1A535C] uppercase tracking-wider mb-3">
                      What We Do
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-[#5A5A5A]">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-[#FFF8F0] rounded-lg border border-[#E8DFD0]">
                    <p className="text-[10px] text-[#B8860B] uppercase tracking-wider mb-1">Who It&apos;s For</p>
                    <p className="text-sm text-[#5A5A5A]">{program.who}</p>
                  </div>
                </motion.div>

                {/* Visual Card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center relative overflow-hidden`}>
                    {/* Decorative circles */}
                    <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-white/10" />
                    <div className="absolute bottom-12 left-12 w-16 h-16 rounded-full border border-white/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5" />

                    <div className="relative text-center text-white z-10">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                          {program.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                        {program.title}
                      </p>
                      <p className="text-xs text-white/60 mt-1 tracking-wider uppercase">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Support notice */}
      <section className="py-10 px-4 bg-white border-y border-[#E8DFD0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            Our support is community and spiritual encouragement only, confidential within community limits, not licensed counseling.
            If you are in crisis or need urgent help, please contact local emergency services or a licensed professional immediately.
          </p>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-20 sm:py-28 px-4 bg-[#1A535C] text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-6">
              Make A Difference
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How You Can Help
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Volunteer",
                  desc: "Join our outreach teams. Give your time, skills, and love to those who need it most.",
                },
                {
                  title: "Donate",
                  desc: "To give or to help in kind, please reach out for a conversation first. We accept no online donations. Every act of kindness begins with a message.",
                },
                {
                  title: "Spread the Word",
                  desc: "Share our mission. Tell someone. Post about us. Awareness is the first step toward change.",
                },
              ].map((item, idx) => (
                <div key={item.title} className="p-6 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                    <span className="text-[#D4AF37] text-sm font-bold">{idx + 1}</span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ease/contact"
                className="inline-block px-8 py-4 bg-[#D4AF37] text-[#1A535C] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#E8D48B] transition-colors duration-500"
              >
                Get Involved
              </Link>
              <a
                href="https://wa.me/2347043793765?text=Hi%20Yvonne!%20I%27d%20like%20to%20support%20Ease%20with%20Yvonne."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-500"
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
