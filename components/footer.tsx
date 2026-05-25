import Link from "next/link";

const footerLinks = [
  { href: "#servizi", label: "Servizi" },
  { href: "#processo", label: "Processo" },
  { href: "#progetti", label: "Portfolio" },
  { href: "#contatto", label: "Contatto" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Copyright */}
          <p className="font-mono text-xs tracking-wider text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Nexflow
          </p>

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.3em] uppercase text-foreground text-center order-first md:order-none"
          >
            Nexflow
          </Link>

          {/* Links */}
          <ul className="flex items-center justify-center md:justify-end gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
