"use client";

import { motion } from "framer-motion";

export default function EaseContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 bg-[#1A535C] text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-3"
        >
          Join the Mission
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get Involved
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 mt-4 text-sm max-w-lg mx-auto"
        >
          Every act of kindness matters. Here&apos;s how you can be part of the change.
        </motion.p>
      </section>

      {/* Contact Options */}
      <section className="py-20 sm:py-28 px-4 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <a
              href="https://wa.me/2347043793765"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#D4AF37]/50 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1A535C]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                <svg className="w-5 h-5 text-[#1A535C] group-hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3
                className="text-lg font-bold text-[#1A535C] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                WhatsApp
              </h3>
              <p className="text-xs text-[#5A5A5A]">Quick chat with Yvonne</p>
            </a>

            <a
              href="https://instagram.com/easewithyvonne"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#D4AF37]/50 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1A535C]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                <svg className="w-5 h-5 text-[#1A535C] group-hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3
                className="text-lg font-bold text-[#1A535C] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Instagram
              </h3>
              <p className="text-xs text-[#5A5A5A]">@easewithyvonne</p>
            </a>

            <a
              href="https://facebook.com/easewithyvonne"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#D4AF37]/50 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1A535C]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                <svg className="w-5 h-5 text-[#1A535C] group-hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3
                className="text-lg font-bold text-[#1A535C] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Facebook
              </h3>
              <p className="text-xs text-[#5A5A5A]">Ease W Yvonne</p>
            </a>
          </div>

          {/* A personal invitation */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.4em] text-[#B8860B] uppercase mb-3">
              A Personal Invitation
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A535C] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Would Love to Hear From You
            </h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Whether you are seeking support, curious about our programs, or simply moved
              to help in a small and honest way with your time, your kindness or your voice,
              please reach out. There are no online donations and no payments on this website.
              Everything begins with a simple conversation, and every message is welcome.
            </p>
          </div>

          {/* Static Contact Info */}
          <div className="bg-white rounded-2xl border border-[#E8DFD0] p-8 sm:p-10">
            <div className="space-y-6">
              <p className="text-xs text-[#B8860B] uppercase tracking-wider mb-3">
                Get In Touch
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-[#B8860B] uppercase tracking-wider mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/2347043793765"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A535C] font-medium hover:text-[#D4AF37] transition-colors"
                  >
                    +234 704 379 3765
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#B8860B] uppercase tracking-wider mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/easewithyvonne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A535C] font-medium hover:text-[#D4AF37] transition-colors"
                  >
                    @easewithyvonne
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#B8860B] uppercase tracking-wider mb-1">
                    Facebook
                  </p>
                  <a
                    href="https://facebook.com/easewithyvonne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A535C] font-medium hover:text-[#D4AF37] transition-colors"
                  >
                    Ease W Yvonne
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#5A5A5A] italic mt-6">
                Please reach out via the channels above. No form submissions are currently accepted.
                Our support is community and spiritual encouragement only, confidential within community limits, not licensed counseling.
                If in crisis, please contact local emergency services or a licensed professional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
