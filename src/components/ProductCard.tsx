"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link href={`/collections/${product.id}`}>
        {/* Image with fade-in */}
        <div className="relative aspect-[3/4] bg-mist rounded-sm overflow-hidden mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-transform duration-700 group-hover:scale-105${product.soldOut ? " grayscale opacity-60" : ""}`}
            />
          </motion.div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          {/* Gentle sold-out banner */}
          {product.soldOut && (
            <div className="absolute inset-x-0 bottom-0 py-2 bg-cream/90 text-charcoal text-[10px] tracking-[0.3em] uppercase text-center backdrop-blur-sm">
              Sold Out
            </div>
          )}
          {/* Gender badge */}
          {product.gender === "unisex" && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-charcoal/80 text-gold text-[9px] tracking-[0.2em] uppercase backdrop-blur-sm">
              Unisex
            </div>
          )}
          {/* New arrival badge */}
          {product.isNew && !product.soldOut && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-gold text-charcoal text-[9px] tracking-[0.2em] uppercase font-medium">
              New
            </div>
          )}
        </div>

        {/* Info */}
        <div className="text-center">
          <h3
            className="text-base sm:text-lg font-semibold text-charcoal group-hover:text-gold transition-colors duration-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.name}
          </h3>
          <p
            className="text-xs text-graphite mt-1 italic"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.tagline}
          </p>
          <p className="text-[11px] text-gold mt-1 tracking-wider uppercase">Contact for Price</p>
        </div>
      </Link>
    </motion.div>
  );
}
