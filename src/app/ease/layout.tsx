"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/ease", label: "Home" },
  { href: "/ease/about", label: "About" },
  { href: "/ease/programs", label: "Programs" },
  { href: "/ease/contact", label: "Get Involved" },
  { href: "/", label: "Boutique", external: false },
];

export default function EaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#FFF8F0", color: "#2D2D2D" }} className="min-h-screen">
      <EaseHeader navLinks={navLinks} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="bg-[#1A535C] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image src="/images/god-is-able-logo.jpg" alt="God is Able" fill sizes="48px" className="object-contain rounded-full" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold tracking-[0.1em]" style={{ fontFamily: "var(--font-heading)" }}>EASE</span>
                  <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase">with Yvonne</span>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                Impacting lives through counseling, outreach, and community service.
                Building a happy and fulfilled generation.
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/ease/about", label: "Our Story" },
                  { href: "/ease/programs", label: "Programs" },
                  { href: "/ease/contact", label: "Get Involved" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/terms-of-use", label: "Terms of Use" },
                  { href: "/", label: "Yvonne Collection" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Connect With Us</h3>
              <div className="flex flex-col gap-2 text-sm text-white/70">
                <a href="https://instagram.com/easewithyvonne" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  Instagram: @easewithyvonne
                </a>
                <a href="https://facebook.com/easewithyvonne" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  Facebook: Ease W Yvonne
                </a>
                <a href="https://wa.me/2347043793765" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Ease with Yvonne Initiative (community project, registration pending). All rights reserved.</p>
            <p className="text-xs text-white/50 italic" style={{ fontFamily: "var(--font-heading)" }}>God is Able</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function EaseHeader({ navLinks }: { navLinks: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-sm border-b border-[#E8DFD0]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/ease" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image src="/images/god-is-able-logo.jpg" alt="God is Able" fill sizes="48px" className="object-contain rounded-full" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base sm:text-lg font-bold tracking-[0.1em] text-[#1A535C]" style={{ fontFamily: "var(--font-heading)" }}>EASE</span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.3em] text-[#B8860B] uppercase">with Yvonne</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm tracking-wide text-[#5A5A5A] hover:text-[#1A535C] transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-[#5A5A5A] hover:text-[#1A535C] p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]" aria-label="Toggle menu" aria-expanded={open} aria-controls="ease-mobile-nav">
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </nav>
      {open && (
        <div id="ease-mobile-nav" className="md:hidden bg-[#FFF8F0] border-b border-[#E8DFD0] shadow-lg" role="navigation" aria-label="Mobile navigation">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm tracking-wide text-[#5A5A5A] hover:text-[#1A535C] transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
