"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 bg-charcoal text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs tracking-[0.4em] text-gold uppercase mb-3"
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
          About Yvonne Collection
        </motion.h1>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">
                The Woman Behind the Brand
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-charcoal mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Fashion is how you feel
                <br />
                <span className="text-gold">when you put it on.</span>
              </h2>
              <div className="space-y-4 text-graphite leading-relaxed">
                <p>
                  Yvonne Collection was born from a simple belief: everyone deserves to feel
                  beautiful, confident, and seen, without spending a fortune to get there.
                </p>
                <p>
                  Founded by a mother who understands that fashion isn&apos;t just about clothes,
                  it&apos;s about how they make you feel when you put them on. From statement
                  graphic tees that speak your truth to elegant dresses that command attention,
                  every piece is curated with intention.
                </p>
                <p>
                  Whether you&apos;re looking for a unisex tee that works for him and her, a
                  showstopping dress for date night, or a classic blouse for the office,
                  this is your new favourite closet.
                </p>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-mist relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-cover bg-center"
                  role="img"
                  aria-label="Model wearing Yvonne Collection side-knot maxi dress in terracotta — elegant faith-inspired fashion"
                  style={{
                    backgroundImage: "url(/images/products/product-14.jpg)",
                  }}
                />
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-gold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 px-4 bg-mist">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">
              What We Stand For
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              {
                title: "Faith",
                desc: '"God is Able" isn\'t just our tagline, it\'s our foundation. We believe in the power of faith, family, and knowing your worth.',
              },
              {
                title: "Inclusivity",
                desc: "Fashion has no gender. Our graphic tees are designed for everyone: him, her, and everyone in between. Style is universal.",
              },
              {
                title: "Accessibility",
                desc: "Looking good shouldn't cost a fortune. We bring you curated fashion at prices that respect your budget without compromising on quality.",
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 border border-gold flex items-center justify-center">
                  <span
                    className="text-gold text-lg"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {val.title[0]}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {val.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 sm:py-28 px-4 bg-charcoal text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-2xl sm:text-3xl text-white italic leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &ldquo;Welcome to Yvonne Collection.
            <br />
            Welcome to your new favorite closet.&rdquo;
          </p>
        </motion.div>
      </section>
    </>
  );
}
