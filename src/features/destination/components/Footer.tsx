import Link from "next/link";

const footerLinks = [
  { label: "Sustainability", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Careers", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low w-full rounded-t-[24px] font-body text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-4 text-center md:text-left">
          <div className="text-xl font-bold text-primary font-headline">
            Desa Wisata
          </div>
          <p className="text-on-surface-variant max-w-xs">
            Curating sustainable adventures in the heart of Indonesia&apos;s
            pastoral landscapes.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Share"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center pb-8 text-on-surface-variant/60 text-xs">
        © {new Date().getFullYear()} Desa Wisata. All rights reserved.
      </div>
    </footer>
  );
}
