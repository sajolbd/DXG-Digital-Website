import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";

export default function AceFounderSection() {
  return (
    <section className="relative overflow-hidden py-8 lg:py-44">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/images/home/ace-founder/founder-bg.png"
          alt="Ace Founder Background"
          fill
          priority
          className="object-cover object-[22%_center] sm:object-[30%_center] lg:object-center"
        />
      </div>

      {/* Mobile Only Overlay */}
      <div className="absolute inset-0 bg-black/60 lg:hidden" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/75 lg:hidden" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
            {/* Left */}
            <div className="pt-0 lg:pt-2">
              <TypingTitle
                as="h2"
                className="max-w-[380px] text-4xl font-black uppercase leading-[0.95] text-white sm:text-4xl lg:text-5xl"
              >
                Meet The Founder
              </TypingTitle>
            </div>

            {/* Right */}
            <div className="max-w-3xl lg:ml-auto">
              <div className="space-y-6 text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
                <p>
                  When you&apos;re planning an event, you&apos;re not just
                  managing logistics — you&apos;re protecting your reputation.
                  At DXG, we take that responsibility seriously. Every
                  production we touch is backed by decades of expertise, a team
                  that operates with flawless precision, and a standard of
                  excellence that doesn&apos;t waver when things get
                  complicated.
                </p>

                <p>
                  Wallace “Ace” Johnson, CTS, founded Digital Xperience Group on
                  a simple belief: meeting planners deserve a production partner
                  they never have to worry about. With 25+ years in live-event
                  AV production, Ace has built his expertise from both sides of
                  the table.
                </p>

                <p>
                  That knowledge works directly in your favor. His executive
                  leadership roles across the industry&apos;s top companies, his
                  CTS certification, and his tenure on the AVIXA Board of
                  Directors reflect a career built not just on experience, but
                  on a genuine commitment to raising the standard of this
                  industry.
                </p>

                <div className="space-y-5 pt-2">
                  <p>
                    Want to stay connected and follow what DXG is working on?
                    Connect with Ace on LinkedIn
                  </p>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-slide-primary inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold"
                  >
                    <Linkedin size={14} strokeWidth={2.5} />
                    Ace Johnson
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
