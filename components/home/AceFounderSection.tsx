import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

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
                <Reveal as="p">
                  When you&apos;re planning an event, you&apos;re not just
                  managing logistics — you&apos;re protecting your reputation.
                  At DXG, we take that responsibility seriously. Every
                  production we touch is backed by decades of expertise, a team
                  that operates with flawless precision, and a standard of
                  excellence that doesn&apos;t waver when things get
                  complicated.
                </Reveal>

                <Reveal as="p" delay={0.06}>
                  Wallace &quot;Ace&quot; Johnson, CTS, founded Digital
                  Xperience Group on a simple belief: meeting planners deserve a
                  production partner they never have to worry about. With 25+
                  years in live-event AV production, Ace has built his expertise
                  from both sides of the table. His background spans hotel AV
                  operations and independent production — giving him a rare,
                  insider understanding of how venues think, how contracts work,
                  and exactly where planners can get caught off guard.
                </Reveal>

                <Reveal as="p" delay={0.12}>
                  That knowledge works directly in your favor. His executive
                  leadership roles across the industry&apos;s top companies, his
                  CTS certification, and his tenure on the AVIXA Board of
                  Directors reflect a career built not just on experience, but
                  on a genuine commitment to raising the standard of this
                  industry. What his clients say most isn&apos;t about the
                  technology or the logistics. It&apos;s about how they feel on
                  event day. Confident. Covered. Calm. That&apos;s what Ace
                  brings to every event — and that&apos;s what DXG promises
                  every planner who trusts us with their stage.
                </Reveal>

                <Reveal as="p" className="pt-2" delay={0.18}>
                  Want to stay connected and follow what DXG is working on?
                  <br />
                  Connect with Ace on LinkedIn
                </Reveal>

                <div className="pt-1">
                  <Link
                    href="https://www.linkedin.com/company/dxg-agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-slide-primary group inline-flex min-h-11 min-w-[178px] items-center justify-center gap-2.5 px-8 py-3 text-xs font-bold leading-none"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <FaLinkedinIn className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="translate-y-px">Ace Johnson</span>
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
