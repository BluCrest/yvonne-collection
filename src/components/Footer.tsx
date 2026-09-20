import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/god-is-able-logo.jpg"
                  alt="God is Able"
                  fill
                  sizes="48px"
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-bold tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  YVONNE
                </span>
                <span className="text-[9px] tracking-[0.35em] text-gold font-medium uppercase">
                  Collection
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              Elegance rooted in faith. Style without compromise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/ease", label: "Ease Home" },
                { href: "/ease/about", label: "Our Story" },
                { href: "/ease/programs", label: "Our Programs" },
                { href: "/imprint", label: "Imprint" },
                { href: "/shipping-returns", label: "Shipping & Returns" },
                { href: "/refund-policy", label: "Refund Policy" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-use", label: "Terms of Use" },
                { href: "/accessibility-statement", label: "Accessibility" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a
                href="https://instagram.com/easewithyvonne"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Instagram — @easewithyvonne
              </a>
              <a
                href="https://facebook.com/easewithyvonne"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Facebook — Ease W Yvonne
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Yvonne Collection — Ease with Yvonne Initiative (community project, registration pending). All rights reserved.
          </p>
          <p className="text-xs text-gray-500 italic" style={{ fontFamily: "var(--font-heading)" }}>
            God is Able
          </p>
        </div>
      </div>
    </footer>
  );
}
