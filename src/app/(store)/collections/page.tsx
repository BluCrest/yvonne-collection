"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeFilter, setActiveFilter] = useState(initialCategory);

  const availableProducts = products.filter((p) => !p.soldOut);
  const newProducts = products.filter((p) => p.isNew);

  const filteredProducts =
    activeFilter === "all"
      ? products
      : activeFilter === "available"
        ? availableProducts
        : activeFilter === "new"
          ? newProducts
          : products.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 bg-charcoal text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs tracking-[0.4em] text-gold uppercase mb-3"
        >
          Browse
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Collections
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-4 text-sm"
        >
          {products.length} pieces for him and her
        </motion.p>
      </section>

      {/* Filters */}
      <section className="px-4 py-8 border-b border-gray-100 sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-charcoal text-white border-charcoal"
                : "bg-white text-graphite border-gray-200 hover:border-gold hover:text-gold"
            }`}
          >
            All ({products.length})
          </button>
          <button
            onClick={() => setActiveFilter("available")}
            className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
              activeFilter === "available"
                ? "bg-gold text-charcoal border-gold font-medium"
                : "bg-white text-graphite border-gray-200 hover:border-gold hover:text-gold"
            }`}
          >
            Available Now ({availableProducts.length})
          </button>
          <button
            onClick={() => setActiveFilter("new")}
            className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
              activeFilter === "new"
                ? "bg-gold text-charcoal border-gold font-medium"
                : "bg-white text-graphite border-gray-200 hover:border-gold hover:text-gold"
            }`}
          >
            New In ({newProducts.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-white text-graphite border-gray-200 hover:border-gold hover:text-gold"
                }`}
              >
                {cat.name}
                {cat.gender === "unisex" && (
                  <span className="ml-1 text-gold">★</span>
                )}{" "}
                ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {activeFilter === "available" && (
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">
                Ready to Order
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-charcoal"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Available Now
              </h2>
              <p className="text-sm text-graphite mt-3 max-w-lg mx-auto">
                These pieces are currently in stock and ready for WhatsApp ordering.
              </p>
            </div>
          )}
          {activeFilter === "new" && (
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">
                Just Landed
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-charcoal"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                New Additions
              </h2>
              <p className="text-sm text-graphite mt-3 max-w-lg mx-auto">
                Fresh pieces, just added to the boutique and ready for WhatsApp ordering.
              </p>
            </div>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <p className="text-center text-graphite py-20">
              No products in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-graphite">
          Loading collections...
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
