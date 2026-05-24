"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";

const contactItems = [
  {
    Icon: MapPin,
    label: "12824 Dupont Circle Tampa, FL 33626",
  },
  {
    Icon: Phone,
    label: "855.282.9394",
    href: "tel:+18552829394",
  },
  {
    Icon: Mail,
    label: "info@dxg.agency",
    href: "mailto:info@dxg.agency",
  },
] satisfies {
  Icon: LucideIcon;
  label: string;
  href?: string;
}[];

const socialItems = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/dxg.agency",
  },
  { Icon: X, label: "X", href: "https://x.com/dxgagency" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dxg-agency",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/dxgagcy/",
  },
] satisfies {
  Icon: LucideIcon;
  label: string;
  href: string;
}[];

export default function ContactFormSection() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );

      setSuccess("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setSuccess("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-8 lg:py-16">
      <Container className="max-w-[1260px]">
        <div className="overflow-hidden rounded-[22px] border border-primary/15 bg-[#071827] shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-16 lg:p-12">
            <div>
              <TypingTitle
                as="h2"
                className="text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl lg:text-[42px]"
              >
                <span className="text-primary">Let&apos;s Talk</span> About{" "}
                <br />
                Your Event
              </TypingTitle>

              <Reveal
                as="p"
                className="mt-6 max-w-[360px] text-sm leading-6 text-white/85"
              >
                Your event deserves an AV partner who&apos;s as invested in the
                outcome as you are. Let&apos;s make sure your plan is built for
                success - before you commit.
              </Reveal>

              <div className="mt-8 border-t border-white/10 pt-8">
                <Reveal kind="list" as="div" className="space-y-5">
                  {contactItems.map(({ Icon, label, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary bg-[#082033] text-primary">
                        <Icon size={16} strokeWidth={2} />
                      </div>

                      {href ? (
                        <a
                          href={href}
                          className="text-sm leading-6 text-white/90 transition hover:text-primary"
                        >
                          {label}
                        </a>
                      ) : (
                        <p className="text-sm leading-6 text-white/90">
                          {label}
                        </p>
                      )}
                    </div>
                  ))}
                </Reveal>

                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-8">
                  {socialItems.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-primary bg-[#082033] text-primary transition duration-300 hover:bg-primary hover:text-black"
                    >
                      <Icon size={16} strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="w-full space-y-4"
              >
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter Name"
                  className="h-10 w-full rounded-[10px] border border-transparent bg-[#223140] px-5 text-sm text-white placeholder:text-white/70 transition focus:border-primary focus:outline-none"
                />

                <input
                  type="text"
                  name="user_phone"
                  required
                  placeholder="Enter Number"
                  className="h-10 w-full rounded-[10px] border border-transparent bg-[#223140] px-5 text-sm text-white placeholder:text-white/70 transition focus:border-primary focus:outline-none"
                />

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter Email"
                  className="h-10 w-full rounded-[10px] border border-transparent bg-[#223140] px-5 text-sm text-white placeholder:text-white/70 transition focus:border-primary focus:outline-none"
                />

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Enter Message"
                  className="min-h-[120px] w-full resize-none rounded-[10px] border border-transparent bg-[#223140] p-5 text-sm text-white placeholder:text-white/70 transition focus:border-primary focus:outline-none"
                />

                <label className="flex items-start gap-3 text-xs leading-5 text-white/85">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-3.5 w-3.5 shrink-0 accent-primary"
                  />

                  <span>
                    I understand that the use of this form for communication
                    with Digital Xperience Group (DXG).
                  </span>
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-slide-primary inline-flex h-10 min-w-[170px] items-center justify-center rounded px-10 text-sm font-bold disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>

                {success && (
                  <p className="pt-1 text-sm text-primary">{success}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
