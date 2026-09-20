"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, getProductsByCategory, type Product } from "@/lib/products";

function ProductGallery({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative aspect-[3/4] bg-mist overflow-hidden"
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover${product.soldOut ? " grayscale opacity-60" : ""}`}
        priority
      />
      {product.gender === "unisex" && (
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-charcoal/80 text-gold text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm">
          Unisex
        </div>
      )}
      {product.soldOut && (
        <div className="absolute inset-x-0 bottom-0 py-3 bg-cream/90 text-charcoal text-xs tracking-[0.3em] uppercase text-center backdrop-blur-sm">
          Sold Out
        </div>
      )}
    </motion.div>
  );
}

function ProductInfo({ product }: { product: Product }) {
  const whatsappUrl = `https://wa.me/2347043793765?text=${encodeURIComponent(
    product.soldOut
      ? `Hi! I see the ${product.name} is sold out. Could you let me know about a restock or something similar?`
      : `Hi! I'm interested in the ${product.name}. Could you share more details?`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col gap-6"
    >
      <nav className="flex items-center gap-2 text-xs text-graphite">
        <Link href="/collections" className="hover:text-gold transition-colors">
          Collections
        </Link>
        <span>/</span>
        <Link
          href={`/collections?category=${product.category}`}
          className="hover:text-gold transition-colors capitalize"
        >
          {product.category.replace("-", " & ")}
        </Link>
        <span>/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      <div>
        <h1
          className="text-3xl sm:text-4xl font-bold text-charcoal"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {product.name}
        </h1>
        <p
          className="text-lg text-gold italic mt-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {product.tagline}
        </p>
      </div>

      <p className="text-graphite leading-relaxed">{product.description}</p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-gray-700">
        <strong>Price:</strong> Contact for Price — quoted on WhatsApp before payment (incl. delivery).{" "}
        <Link href="/shipping-returns" className="text-gold hover:text-gold/80 underline">Shipping & Returns</Link> •{" "}
        <Link href="/refund-policy" className="text-gold hover:text-gold/80 underline">Refund Policy</Link>
      </div>

      <div>
        <h3
          className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Details
        </h3>
        <ul className="space-y-2">
          {product.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-graphite">
              <span className="w-1 h-1 mt-2 bg-gold rounded-full shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 bg-mist border border-gray-100">
        <h3
          className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Style Tip
        </h3>
        <p className="text-sm text-graphite leading-relaxed italic">
          {product.styleTip}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {product.soldOut && (
          <p className="text-sm text-graphite italic text-center bg-mist border border-gray-100 px-4 py-3">
            This piece is currently sold out. Message us below to ask about a restock or a similar piece.
          </p>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-8 py-4 bg-gold text-charcoal text-sm tracking-[0.2em] uppercase text-center font-medium hover:bg-gold-dark transition-colors duration-500"
        >
          {product.soldOut ? "Ask About Restock" : "Order via WhatsApp"}
        </a>
        <Link
          href="/collections"
          className="px-8 py-4 border border-gray-200 text-graphite text-sm tracking-[0.2em] uppercase text-center hover:border-gold hover:text-gold transition-all duration-500"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-[10px] tracking-wider uppercase border border-gray-200 text-graphite"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 px-4 bg-mist">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">
            You May Also Like
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Related Pieces
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <Link key={product.id} href={`/collections/${product.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-white rounded-sm overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-700 group-hover:scale-105${product.soldOut ? " grayscale opacity-60" : ""}`}
                  />
                  {product.soldOut && (
                    <div className="absolute inset-x-0 bottom-0 py-2 bg-cream/90 text-charcoal text-[10px] tracking-[0.3em] uppercase text-center backdrop-blur-sm">
                      Sold Out
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3
                    className="text-base font-semibold text-charcoal group-hover:text-gold transition-colors duration-300"
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
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
      <RelatedProducts products={related} />
    </>
  );
}
