"use client";

import { InlineWidget } from "react-calendly";
import { CalendarCheck, Clock3, Video } from "lucide-react";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import TypingTitle from "components/layout/TypingTitle";

const sessionNotes = [
  {
    Icon: Clock3,
    label: "Focused insight session",
  },
  {
    Icon: Video,
    label: "Virtual discovery call",
  },
  {
    Icon: CalendarCheck,
    label: "Pick a time that works",
  },
];

export default function CalendlySection() {
  return (
    <section className="bg-black py-8 lg:py-16">
      <Container className="max-w-[1260px]">
        <div className="grid overflow-hidden rounded-[22px] border border-primary/15 bg-[#071827] shadow-[0_28px_90px_rgba(0,0,0,0.42)] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-center border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <Reveal
              as="p"
              className="text-sm font-bold uppercase tracking-[0.22em] text-primary"
            >
              Schedule a Call
            </Reveal>

            <TypingTitle
              as="h2"
              className="mt-4 text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl lg:text-[42px]"
            >
              Book Your{" "}
              <span className="text-primary">DXG Insight Session</span>
            </TypingTitle>

            <Reveal
              as="p"
              className="mt-6 max-w-[390px] text-sm leading-6 text-white/85"
            >
              Choose a time to talk through your event goals, production needs,
              and the smartest next step with the DXG team.
            </Reveal>

            <Reveal kind="list" as="div" className="mt-8 space-y-4">
              {sessionNotes.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary bg-[#082033] text-primary">
                    <Icon size={17} strokeWidth={2} />
                  </div>
                  <p className="text-sm font-semibold text-white/90">
                    {label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="bg-[#0B1722] p-3 sm:p-5 lg:p-6">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-white">
              <InlineWidget
                url="https://calendly.com/digitalxperiencegroup/dxgagency-insight-session"
                styles={{
                  height: "720px",
                  minWidth: "100%",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "00c8ff",
                  textColor: "071827",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
