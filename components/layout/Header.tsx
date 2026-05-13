"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Container from "components/shared/Container";
import Image from "next/image";

const navItems = [
  { label: "Home", target: "home", path: "/" },
  { label: "Our Process", target: "our-process", path: "/our-process" },
  {
    label: "Problems We Solve",
    target: "problems-we-solve",
    path: "/problems-we-solve",
  },
  {
    label: "Experiences We've Created",
    target: "experiences-created",
    path: "/experiences-created",
  },
  { label: "The DXG Difference", target: "difference", path: "/difference" },
  {
    label: "Planner Insight Blog",
    target: "blog",
    path: "/planner-insight-blog",
  },
  { label: "Contact Us", target: "contact", path: "/contact" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTarget, setActiveTarget] = useState("home");
  const [hoveredTarget, setHoveredTarget] = useState<string | null>(null);

  useEffect(() => {
    // Check for exact path match first
    const currentItem = navItems.find((item) => item.path === pathname);

    // If no exact match, check if pathname contains any of the target paths
    if (!currentItem) {
      // Check if we're on a detail/slug page
      if (pathname.startsWith("/problems-we-solve")) {
        setActiveTarget("problems-we-solve");
      } else if (pathname.startsWith("/our-process")) {
        setActiveTarget("our-process");
      } else if (pathname.startsWith("/experiences-created")) {
        setActiveTarget("experiences-created");
      } else if (pathname.startsWith("/difference")) {
        setActiveTarget("difference");
      } else if (pathname.startsWith("/planner-insight-blog")) {
        setActiveTarget("blog");
      } else if (pathname.startsWith("/contact")) {
        setActiveTarget("contact");
      } else {
        setActiveTarget("home");
      }
    } else {
      setActiveTarget(currentItem.target);
    }
  }, [pathname]);

  const handleNavClick = (target: string, path: string) => {
    setActiveTarget(target);
    setMobileMenuOpen(false);
    router.push(path);
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
          <nav className="hidden items-center gap-3 xl:flex 2xl:gap-6">
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
                  className={`relative whitespace-nowrap py-2 text-xs font-medium transition-colors duration-300 hover:text-primary 2xl:text-sm ${
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
          <div className="hidden xl:block">
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
            className="flex items-center justify-center text-white xl:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 xl:hidden ${
          mobileMenuOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
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
