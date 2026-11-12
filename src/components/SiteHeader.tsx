"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { signInUrl } from "@/config/dashboard";
import { SignupLink } from "@/components/SignupLink";

type SiteHeaderProps = {
  page?: "home" | "pricing";
};

export function SiteHeader({ page = "home" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const isHome = page === "home";
  const navItems = isHome
    ? [
        ["How it works", "#how-it-works"],
        ["Pricing", "/pricing"],
        ["FAQ", "#faq"],
      ]
    : [
        ["How it works", "/#how-it-works"],
        ["Pricing", "/pricing"],
        ["FAQ", "/#faq"],
      ];

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);

    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header container">
      <a
        href={isHome ? "#top" : "/"}
        className="brand"
        aria-label="Cohora home"
      >
        <img src="/logo.png" alt="" />
        <span>Cohora</span>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="login-button"
          href={signInUrl}
          rel="noreferrer"
          target="_blank"
        >
          Log in
        </a>
        <SignupLink
          className="button button-small"
          rel="noreferrer"
          target="_blank"
        >
          Start with the free plan <ArrowRight size={15} />
        </SignupLink>
      </div>
      <button
        aria-controls={menuId}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id={menuId}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a
            className="login-button"
            href={signInUrl}
            rel="noreferrer"
            target="_blank"
            onClick={closeMenu}
          >
            Log in
          </a>
          <SignupLink
            className="button"
            rel="noreferrer"
            target="_blank"
            onClick={closeMenu}
          >
            Start with the free plan <ArrowRight size={17} />
          </SignupLink>
        </div>
      </div>
    </header>
  );
}
