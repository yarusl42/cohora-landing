"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/SKYNEX.webp";

export type HeaderNavItem = {
  href: string;
  label: string;
};

export type HeaderClientStrings = {
  tagline: string;
  consult: string;
  consultShort: string;
};

type HeaderClientProps = {
  navItems: HeaderNavItem[];
  strings: HeaderClientStrings;
};

export default function HeaderClient({ navItems, strings }: HeaderClientProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleConsultClick = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-20 h-8">
            <Image
              src={logo}
              alt="Skynex"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </div>
          <span className="leading-tight mt-1 ms-2 text-[11px] text-muted-foreground uppercase tracking-[0.14em]">
            {strings.tagline}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleConsultClick}
            className="inline-flex items-center justify-center rounded-full border border-primary/50 px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {strings.consult}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={handleConsultClick}
            className="inline-flex items-center justify-center rounded-full border border-primary/50 px-3 py-1 text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {strings.consultShort}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-border px-2.5 py-1.5 text-xs text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {isMobileOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center justify-between rounded-md px-2 py-1.5 transition-colors ${
                  isActive(item.href)
                    ? "text-foreground font-medium bg-accent/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
