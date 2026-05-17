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
    image: "/images/planner-insight-blog/1.png",
    shortDesc:
      "The lights dim and the audience falls silent as a single spotlight finds the keynote speaker stepping onto the stage.",
    content: [
      "The lights dim and the audience falls silent as a single spotlight finds the keynote speaker stepping onto the stage.",
      "For the audience, this moment feels like magic. For the event planner standing in the back of the room, this moment represents weeks of planning, preparation, and flawless coordination.",
      "At DXG, we believe every successful event begins with a dependable run of show strategy.",
      "From technical rehearsals to speaker transitions and cue management, our team ensures every detail aligns perfectly.",
      "When the unexpected happens, preparation becomes the difference between panic and confidence.",
    ],
  },

  {
    id: 2,
    slug: "why-production-planning-matters",
    title: "Why Production Planning Matters More Than Ever",
    date: "March 22, 2026",
    image: "/images/planner-insight-blog/2.png",
    shortDesc:
      "Strong production planning creates smoother event execution and a better audience experience.",
    content: [
      "Production planning is the foundation of successful live events.",
      "Without structure, timelines and communication can quickly break down.",
      "DXG helps event planners stay proactive instead of reactive.",
    ],
  },

  {
    id: 3,
    slug: "creating-engaging-hybrid-events",
    title: "Creating Engaging Hybrid Event Experiences",
    date: "March 18, 2026",
    image: "/images/planner-insight-blog/3.png",
    shortDesc:
      "Hybrid events require the perfect balance between in-person and virtual engagement.",
    content: [
      "Hybrid events are now a major part of the event industry.",
      "Audience engagement must feel seamless across every platform.",
    ],
  },

  {
    id: 4,
    slug: "event-technology-trends",
    title: "Event Technology Trends In 2026",
    date: "March 10, 2026",
    image: "/images/planner-insight-blog/4.png",
    shortDesc:
      "Technology continues transforming how audiences interact with live events.",
    content: [
      "Technology is shaping the future of event experiences.",
      "AI, immersive visuals, and audience interaction tools continue evolving.",
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
