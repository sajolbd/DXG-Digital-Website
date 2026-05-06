import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Container from "components/shared/Container";
import Image from "next/image";

const services = [
  "Production Management",
  "Audio Visual Technology",
  "Event Platform Services",
  "Event Experience Design",
  "Graphics & Animation",
  "Photography & Videography",
];

const whyDXG = [
  "Our Process",
  "Our Services",
  "Our Mission",
  "Our Experience",
  "Terms & Conditions",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        {/* Top */}
        <div className="border-b border-white/20 py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              {/* Logo */}
              <Link href="/" className="shrink-0" aria-label="DXG Digital Home">
                <Image
                  src="/images/logo.png"
                  alt="DXG Logo"
                  width={110}
                  height={63}
                  priority
                  className="h-auto w-[110px] object-contain"
                />
              </Link>
            </div>

            {/* Newsletter Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-relaxed tracking-wider lg:text-5xl">
                Join Our Newsletter
              </h2>
              <p className="mt-2 text-sm text-white/70 lg:text-base">
                Receive Marketing Tips &amp; Growth Strategies
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full">
              <form className="space-y-4">
                {/* Input + Button */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:overflow-hidden sm:rounded-full sm:bg-white">
                  {/* Input */}
                  <div className="flex w-full items-center gap-2 rounded-full bg-white px-4 sm:rounded-none sm:bg-transparent">
                    <Mail size={18} className="text-black/50" />
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      className="h-12 w-full bg-transparent text-sm text-black outline-none"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="btn-slide-primary h-12 w-full rounded-full text-sm font-semibold sm:w-auto sm:rounded-none sm:px-8"
                  >
                    Send Us ↗
                  </button>
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-2 text-xs text-white/70">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-primary"
                  />
                  <span>
                    I&apos;m accept the{" "}
                    <Link
                      href="/terms"
                      className="underline hover:text-primary"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14 lg:py-16">
          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold leading-relaxed tracking-wider">
              About Company
            </h3>
            <p className="mt-5 text-sm leading-8 text-white/70">
              By subscribing to our newsletter, you&apos;re not just signing up
              for updates — you&apos;re joining a community dedicated to
              continuous learning and growth. Each edition is carefully curated
              to bring you the most relevant and impactful information.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold leading-relaxed tracking-wider">
              Service
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              {services.map((item) => (
                <li key={item}>
                  <Link href="/" className="transition hover:text-cyan-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why DXG */}
          <div>
            <h3 className="text-2xl font-semibold leading-relaxed tracking-wider">
              Why DXG
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              {whyDXG.map((item) => (
                <li key={item}>
                  <Link href="/" className="transition hover:text-cyan-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold leading-relaxed tracking-wider">
              Quick links
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>12824 Dupont Circle Tampa, FL 33626</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>855.282.9394</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>info@dxg.agency</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <Link href="/" className="transition hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="/" className="transition hover:text-primary">
                <Linkedin size={20} />
              </Link>
              <Link href="/" className="transition hover:text-primary">
                <FaXTwitter size={18} />
              </Link>
              <Link href="/" className="transition hover:text-primary">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/20 py-6 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-center lg:text-left">
            {new Date().getFullYear()}{" "}
            <span className="text-primary">Digital Experience Group (DXG)</span>{" "}
            © All Rights Reserved
          </p>

          <p className="text-center lg:text-right">
            Design &amp; Development{" "}
            <Link
              href="https://www.bayshorecommunication.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Bayshore Communication
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
