"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Container from "components/shared/Container";
import Image from "next/image";

const navItems = [
  { label: "Home", target: "home", path: "/" },
  { label: "Who We Are", target: "who-we-are", path: "/who-we-are" },
  { label: "Services", target: "services", path: "/services" },
  { label: "Portfolio", target: "portfolio", path: "/portfolio" },
  { label: "The DXG Difference", target: "difference", path: "/difference" },
  { label: "Our Blog", target: "blog", path: "/blog" },
  { label: "Contact Us", target: "contact", path: "/contact" },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTarget, setActiveTarget] = useState("home");
  const [hoveredTarget, setHoveredTarget] = useState<string | null>(null);

  const handleNavClick = (target: string, path: string) => {
    setActiveTarget(target);
    setMobileMenuOpen(false);

    if (target === "home") {
      router.push("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(target);

    if (!section) {
      router.push(path);
      return;
    }

    window.history.pushState(null, "", path);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const currentDesktopUnderline = hoveredTarget || activeTarget;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="DXG Digital Home">
            <Image
              src="/images/logo.png"
              alt="DXG Logo"
              width={87}
              height={63}
              priority
              className="h-auto w-[87px] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = activeTarget === item.target;
              const showUnderline = currentDesktopUnderline === item.target;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.target, item.path)}
                  onMouseEnter={() => setHoveredTarget(item.target)}
                  onMouseLeave={() => setHoveredTarget(null)}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    active || showUnderline ? "text-primary" : "text-white"
                  }`}
                >
                  {item.label}
                  {showUnderline ? (
                    <motion.span
                      layoutId="active-header-link"
                      className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  ) : null}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => handleNavClick("proposal", "/proposal")}
              className="btn-slide-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Request for Proposal
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col py-6">
            {navItems.map((item) => {
              const active = activeTarget === item.target;

              return (
                <button
                  key={item.label}
                  type="button"
                  className={`relative border-b border-white/10 py-3 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    active ? "text-primary" : "text-white"
                  }`}
                  onClick={() => handleNavClick(item.target, item.path)}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="active-mobile-header-link"
                      className="absolute bottom-0 left-0 h-0.5 w-12 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  ) : null}
                </button>
              );
            })}

            <button
              type="button"
              className="btn-slide-primary mt-5 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold"
              onClick={() => handleNavClick("proposal", "/proposal")}
            >
              Request for Proposal
            </button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
