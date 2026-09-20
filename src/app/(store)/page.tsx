"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryGrid from "@/components/CategoryGrid";
import { getFeaturedProducts, getNewProducts } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewProducts();

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Brand Statement */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">
              Our Promise
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We believe everyone deserves to feel powerful in what they wear.
            </h2>
            <div className="divider-gold w-16 mx-auto mb-6" />
            <p className="text-graphite leading-relaxed max-w-2xl mx-auto">
              Yvonne Collection curates pieces that move from Sunday service to Saturday
              night, because your wardrobe shouldn&apos;t make you choose. From unisex
              graphic tees to elegant dresses, every piece is chosen with intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 px-4 bg-mist">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.4em] text-gold uppercase mb-3"
            >
              Handpicked
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Curated for You
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-block px-8 py-3 border border-gold text-gold text-sm tracking-[0.3em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* New Additions */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.4em] text-gold uppercase mb-3"
            >
              Just Landed
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              New Additions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-graphite mt-4 max-w-lg mx-auto"
            >
              Fresh pieces, just added to the boutique and ready for WhatsApp ordering.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-block px-8 py-3 border border-gold text-gold text-sm tracking-[0.3em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
            >
              Shop All
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <CategoryGrid />

      {/* Testimonial / Quote */}
      <section className="py-20 sm:py-28 px-4 bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold/50" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold/50" />
              <div className="w-8 h-px bg-gold/50" />
            </div>
            <p
              className="text-2xl sm:text-3xl text-white italic leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              &ldquo;Faith. Fashion. Freedom.&rdquo;
            </p>
            <p className="text-sm text-gold tracking-[0.3em] uppercase">
              God is Able
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Join the Yvonne Circle
            </h2>
            <p className="text-graphite mb-8 max-w-lg mx-auto">
              First access to new drops, exclusive styling tips, and private sales.
              Be the first to know.
            </p>
            <a
              href="https://wa.me/2347043793765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gold text-charcoal text-sm tracking-[0.3em] uppercase hover:bg-gold-dark transition-colors duration-500 font-medium"
            >
              Shop via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
