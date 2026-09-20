"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

const categoryImages: Record<string, string> = {
  "graphic-tees": "/images/products/product-01.jpg",
  dresses: "/images/products/product-14.jpg",
  "tops-blouses": "/images/products/product-17.jpg",
};

const categoryAlts: Record<string, string> = {
  "graphic-tees": "Model wearing Yvonne Collection unisex graphic tee — Zipper Lips design in black",
  dresses: "Model wearing Yvonne Collection side-knot maxi dress in terracotta — elegant faith-inspired fashion",
  "tops-blouses": "Model wearing Yvonne Collection floral peplum top — chic everyday blouse",
};

export default function CategoryGrid() {
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] text-gold uppercase mb-3"
          >
            Shop by Style
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Collections
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={`/collections?category=${cat.id}`}
                className="group block relative aspect-[3/4] overflow-hidden"
              >
                {/* Background image with fade */}
                <div className="absolute inset-0">
                  <Image
                    src={categoryImages[cat.id]}
                    alt={categoryAlts[cat.id] ?? `${cat.name} collection preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8">
                  {cat.gender === "unisex" && (
                    <span className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">
                      Unisex
                    </span>
                  )}
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className="text-sm text-gray-300 italic"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cat.description}
                  </p>
                  <div className="mt-4 px-6 py-2 border border-gold text-gold text-xs tracking-[0.3em] uppercase group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                    Explore
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
