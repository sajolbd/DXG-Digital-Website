import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";

export default function AceFounderSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:min-h-[760px] lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/images/home/ace-founder/founder-bg.png"
          alt="Ace Founder Background"
          fill
          priority
          className="object-cover object-[30%_center] sm:object-[35%_center] lg:object-center"
        />
      </div>

      {/* Mobile Only Overlay */}
      <div className="absolute inset-0 bg-black/60 lg:hidden" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/75 lg:hidden" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-20">
            {/* Left */}
            <div className="pt-0 lg:pt-3">
              <TypingTitle
                as="h2"
                className="max-w-[310px] text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl"
              >
                Meet The Founder
              </TypingTitle>
            </div>

            {/* Right */}
            <div className="max-w-4xl lg:ml-auto lg:pt-12">
              <div className="space-y-5 text-sm leading-6 text-white sm:text-base sm:leading-7">
                <p>
                  When you&apos;re planning an event, you&apos;re not just
                  managing logistics — you&apos;re protecting your reputation.
                  At DXG, we take that responsibility seriously. Every
                  production we touch is backed by decades of expertise, a team
                  that operates with flawless precision, and a standard of
                  excellence that doesn&apos;t waver when things get complicated.
                </p>

                <p>
                  Wallace &quot;Ace&quot; Johnson, CTS, founded Digital
                  Xperience Group on a simple belief: meeting planners deserve
                  a production partner they never have to worry about. With 25+
                  years in live-event AV production, Ace has built his expertise
                  from both sides of the table. His background spans hotel AV
                  operations and independent production — giving him a rare,
                  insider understanding of how venues think, how contracts work,
                  and exactly where planners can get caught off guard.
                </p>

                <p>
                  That knowledge works directly in your favor. His executive
                  leadership roles across the industry&apos;s top companies, his
                  CTS certification, and his tenure on the AVIXA Board of
                  Directors reflect a career built not just on experience, but
                  on a genuine commitment to raising the standard of this
                  industry. What his clients say most isn&apos;t about the
                  technology or the logistics. It&apos;s about how they feel on
                  event day. Confident. Covered. Calm. That&apos;s what Ace
                  brings to every event — and that&apos;s what DXG promises every
                  planner who trusts us with their stage.
                </p>

                <p className="pt-2">
                  Want to stay connected and follow what DXG is working on?
                  <br />
                  Connect with Ace on LinkedIn
                </p>

                <div className="pt-1">
                  <Link
                    href="https://www.linkedin.com/in/acedxg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-slide-primary inline-flex min-w-[170px] items-center justify-center gap-2 px-8 py-3 text-xs font-semibold"
                  >
                    <Linkedin size={13} strokeWidth={2.5} />
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
