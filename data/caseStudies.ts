export type CaseStudy = {
  id: number;
  slug: string;
  study: string;
  title: string;
  highlight: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  image: string;
  background: string;
  stats: {
    icon: string;
    label: string;
    value: string;
  }[];
  sections: {
    icon: string;
    title: string;
    highlight: string;
    content?: string;
    list?: string[];
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "association-event-new-orleans",
    study: "Case Study #1",
    title: "Association",
    highlight: "Event",
    subtitle:
      "National Association Conference | 6,500 Attendees | New Orleans, LA",
    quote:
      "DXG helped us solve a major visibility challenge and made execution seamless across the entire event.",
    quoteAuthor: "-Association Planning Committee",
    image: "/images/home/case-study/case-study-1.png",
    background: "#111111",

    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "New Orleans, LA",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/general-session.png",
        label: "(2) Large",
        value: "General Sessions",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Hybrid",
        value: "New Orleans, LA",
      },
    ],

    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed to ensure that all 6,500 attendees could clearly see critical content during live voting sessions.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG redesigned the room layout so every attendee had a clear sightline to critical content.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Clear visibility for all attendees",
          "Zero visibility-related disruptions",
          "Presenters stayed confident",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "corporate-event-orlando",
    study: "Case Study #2",
    title: "Corporate",
    highlight: "Event",
    subtitle: "Corporate Sales Conference | 850 Attendees | Orlando, FL",
    quote:
      "DXG elevated the entire experience. Everything ran smoothly, and the final product exceeded expectations.",
    quoteAuthor: "-Sr Marketing Event Manager",
    image: "/images/home/case-study/case-study-2.png",
    background: "#151515",

    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Orlando, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/general-session.png",
        label: "(2) Large",
        value: "General Session & 12+ Breakouts",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Hybrid",
        value: "Content Capture + Post-Event Media",
      },
    ],

    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed to deliver a high-impact general session experience while ensuring seamless execution.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG designed a production-driven environment focused on clarity, flow, and audience engagement.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Elevated stage experience",
          "Seamless execution",
          "High-quality captured content",
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "association-event-savannah",
    study: "Case Study #3",
    title: "Association",
    highlight: "Event",
    subtitle:
      "Multi-Room Association Conference | 1,200 Attendees | Savannah, GA",
    quote:
      "We hold our event every other year and DXG continues to elevate the experience.",
    quoteAuthor: "-Director Conferences & Navigation Services",
    image: "/images/home/case-study/case-study-3.png",
    background: "#101010",

    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Savannah, GA",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/general-session.png",
        label: "(2) Large",
        value: "General Session & 25+ Breakouts",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Hybrid",
        value: "Content Capture + Post-Event Media",
      },
    ],

    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The planning team was navigating high AV costs and low-quality deliverables.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG became a single production partner — eliminating multi-vendor chaos.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Consistent production quality",
          "Reduced vendor management",
          "Stronger attendee experience",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
