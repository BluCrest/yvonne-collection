"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/ease" className="inline-flex flex-col items-center leading-none">
            <span
              className="text-3xl font-bold tracking-[0.2em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              YVONNE
            </span>
            <span className="text-[10px] tracking-[0.35em] text-gold font-medium uppercase">
              Collection
            </span>
          </Link>
          <p className="text-gray-500 text-sm mt-4 tracking-wider uppercase">
            Initiative Login
          </p>
        </div>

        <p className="text-center text-gray-400 text-sm">
          Access the Ease with Yvonne Initiative (registration pending) pages below.<br/>
          No credentials required — all content is publicly available.
        </p>

        <div className="space-y-4">
          <Link
            href="/ease"
            className="inline-block px-6 py-3 bg-gold text-charcoal text-sm tracking-[0.2em] uppercase rounded-lg hover:bg-gold-dark transition-colors"
          >
            Ease Home
          </Link>
          <Link
            href="/ease/about"
            className="inline-block px-6 py-3 bg-gold text-charcoal text-sm tracking-[0.2em] uppercase rounded-lg hover:bg-gold-dark transition-colors"
          >
            About
          </Link>
          <Link
            href="/ease/programs"
            className="inline-block px-6 py-3 bg-gold text-charcoal text-sm tracking-[0.2em] uppercase rounded-lg hover:bg-gold-dark transition-colors"
          >
            Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
