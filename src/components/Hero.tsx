"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Background: faded clothing hangers image — decorative */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{
            backgroundImage: "url(/images/products/product-16.jpg)",
            backgroundPosition: "center 30%",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold/50" />
            <div className="w-2 h-2 rotate-45 border border-gold/50" />
            <div className="w-12 h-px bg-gold/50" />
          </div>

          {/* Logo up top */}
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.15em] text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            YVONNE
          </h1>
          <p className="text-sm sm:text-base tracking-[0.5em] text-gold uppercase mb-10">
            Collection
          </p>

          <div className="divider-gold w-24 mx-auto mb-10" />

          <p
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Elegance rooted in faith.
            <br />
            Style without compromise.
          </p>

          <Link
            href="/collections"
            className="inline-block px-10 py-4 border border-gold text-gold text-sm tracking-[0.3em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Motto at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p
          className="text-xs tracking-[0.4em] text-gold/60 uppercase italic"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          God is Able
        </p>
      </motion.div>
    </section>
  );
}
