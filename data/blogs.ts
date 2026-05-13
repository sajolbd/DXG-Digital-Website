export type Blog = {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  shortDesc: string;
  content: string[];
};

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "building-a-reliable-run-of-show",
    title: "Building A Reliable Run Of Show For Complex Event Productions",
    date: "March 26, 2026",
    image: "/images/planner-insight-blog/blog-feature.png",
    shortDesc:
      "The lights dim and the audience falls silent as a single spotlight finds the keynote speaker stepping onto the stage.",
    content: [
      "The lights dim and the audience falls silent as a single spotlight finds the keynote speaker stepping onto the stage.",
      "For the audience, this moment feels like magic. For the event planner standing in the back of the room, this moment represents weeks of planning, preparation, and flawless coordination.",
      "At DXG, we believe every successful event begins with a dependable run of show strategy.",
      "From technical rehearsals to speaker transitions and cue management, our team ensures every detail aligns perfectly.",
      "When the unexpected happens, preparation becomes the difference between panic and confidence.",
      "A strong run of show gives production teams, speakers, executives, and planners the same operating language. It keeps decisions clear, reduces last-minute confusion, and gives every stakeholder confidence that the event can move from moment to moment without losing momentum.",
    ],
  },

  {
    id: 2,
    slug: "why-production-planning-matters",
    title: "Why Production Planning Matters More Than Ever",
    date: "March 22, 2026",
    image: "/images/planner-insight-blog/blog-feature.png",
    shortDesc:
      "Strong production planning creates smoother event execution and a better audience experience.",
    content: [
      "Production planning is the foundation of successful live events.",
      "Without structure, timelines and communication can quickly break down.",
      "DXG helps event planners stay proactive instead of reactive.",
      "The right planning process maps the experience before the first piece of gear arrives on site. It defines room flow, content needs, rehearsal priorities, technical cues, and decision checkpoints so every department understands how their work supports the event outcome.",
      "This preparation also protects the attendee experience. When production is planned early, presenters feel supported, transitions feel intentional, and the audience sees a polished program instead of the stress behind the scenes.",
    ],
  },

  {
    id: 3,
    slug: "creating-engaging-hybrid-events",
    title: "Creating Engaging Hybrid Event Experiences",
    date: "March 18, 2026",
    image: "/images/planner-insight-blog/blog-feature.png",
    shortDesc:
      "Hybrid events require the perfect balance between in-person and virtual engagement.",
    content: [
      "Hybrid events are now a major part of the event industry.",
      "Audience engagement must feel seamless across every platform.",
      "The challenge is not simply streaming a room to an online audience. A successful hybrid experience considers camera direction, audio clarity, content pacing, audience interaction, and how virtual attendees participate without feeling secondary.",
      "DXG approaches hybrid events as one connected experience with multiple audience paths. The in-room production, broadcast workflow, platform setup, and post-event content all need to support the same communication goal.",
      "When those details are planned together, hybrid events can extend reach without diluting impact.",
    ],
  },

  {
    id: 4,
    slug: "event-technology-trends",
    title: "Event Technology Trends In 2026",
    date: "March 10, 2026",
    image: "/images/planner-insight-blog/blog-feature.png",
    shortDesc:
      "Technology continues transforming how audiences interact with live events.",
    content: [
      "Technology is shaping the future of event experiences.",
      "AI, immersive visuals, and audience interaction tools continue evolving.",
      "For planners, the most valuable technology is not always the newest tool. It is the technology that makes the event easier to understand, easier to run, and more memorable for attendees.",
      "Large-format visuals, flexible LED environments, live content capture, smarter streaming workflows, and real-time audience feedback are all changing how organizations communicate from the stage.",
      "The key is choosing technology around the event objective. When tools are selected with a clear strategy, they support the message instead of distracting from it.",
    ],
  },
];

export function getSortedBlogs() {
  return [...blogs].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA === dateB) {
      return b.id - a.id;
    }

    return dateB - dateA;
  });
}

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
