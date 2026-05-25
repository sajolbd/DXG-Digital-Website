"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sora } from "next/font/google";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "components/shared/Container";
import Image from "next/image";

const headerFont = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navItems = [
  { label: "Home", target: "home", path: "/" },
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
  { label: "Planner Insight Blog", target: "blog", path: "/planner-insight-blog" },
  { label: "Contact Us", target: "contact", path: "/contact" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTarget, setActiveTarget] = useState("home");
  const [hoveredTarget, setHoveredTarget] = useState<string | null>(null);

  useEffect(() => {
    const currentItem = navItems.find((item) => item.path === pathname);
    setActiveTarget(currentItem?.target ?? "home");
  }, [pathname]);

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
        <div
          className={`${headerFont.className} flex h-20 items-center justify-between`}
        >
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
              onClick={() => handleNavClick("contact", "/contact")}
              className="btn-slide-primary capsule-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Request for Proposal
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center text-white xl:hidden"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.span>
            </AnimatePresence>
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
          <nav className={`${headerFont.className} flex flex-col py-6`}>
            {navItems.map((item) => {
              const active = activeTarget === item.target;

              return (
                <motion.button
                  key={item.label}
                  type="button"
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: 18 },
                  }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className={`relative flex min-h-12 w-fit max-w-[calc(100%-3rem)] items-center justify-center px-4 py-3 text-center text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    active ? "text-primary" : "text-white"
                  }`}
                  onClick={() => handleNavClick(item.target, item.path)}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="active-mobile-header-link"
                      className="absolute left-full top-1/2 h-0.5 w-8 -translate-y-1/2 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  ) : null}
                </motion.button>
              );
            })}

            <motion.button
              type="button"
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: 12 },
              }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="btn-slide-primary capsule-button mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              onClick={() => handleNavClick("contact", "/contact")}
            >
              Request for Proposal
            </motion.button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
