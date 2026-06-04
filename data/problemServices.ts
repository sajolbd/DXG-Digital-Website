export type ProblemService = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  heroImage: string;
  bannerImage: string;
  details: string[];
};

const serviceDetailsPath = "/images/problems-we-solve/service-details";

/*
Previous problemServices content kept for reference:

export const problemServices: ProblemService[] = [
  {
    slug: "production-management",
    icon: "/images/problems-we-solve/production-management.png",
    title: "Production Management",
    desc: "At DXG, we specialize in turning your vision into a seamless audiovisual spectacle.",
    heroImage: `${serviceDetailsPath}/production-management.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "At DXG, we specialize in turning your vision into a seamless audiovisual spectacle. Our production management service is the cornerstone of your event's success. We handle every aspect of production, from initial concept to final execution, with meticulous attention to detail. Our team of experienced professionals is equipped with the latest technology and industry insights to manage logistics, coordinate with vendors, and oversee technical requirements.",

      " We understand the complexities of audiovisual production and are dedicated to ensuring that everything runs smoothly. We aim to bring your event to life while providing you complete peace of mind. Trust us to handle the intricacies of production management so you can focus on what truly matters - your message and your audience.",
    ],
  },
  {
    slug: "audiovisual-technology",
    icon: "/images/problems-we-solve/audiovisual-technology.png",
    title: "Audiovisual Technology",
    desc: "In event production, the power of cutting-edge audiovisual technology cannot be overstated.",
    heroImage: `${serviceDetailsPath}/audiovisual-technology.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "In event production, the power of cutting-edge audiovisual technology cannot be overstated. At DXG, we pride ourselves on providing state-of-the-art AV solutions tailored to each event's unique needs. Our inventory includes the latest in sound, lighting, video, and LED equipment, ensuring your event is not just seen and heard but remembered. Our skilled technicians work closely with you to design and implement custom AV setups that enhance your message and captivate your audience. ",

      "From crystal-clear audio systems to visually stunning displays, we ensure every technical detail aligns perfectly with your vision. With our advanced audiovisual technology and expert support, your event will leave a lasting impression, engaging attendees and elevating your message beyond mere words.",
    ],
  },
  {
    slug: "event-platform-services",
    icon: "/images/problems-we-solve/event-platform-services.png",
    title: "Event Platform Services",
    desc: "In today's digital-first world, an event's success often hinges on the robustness of its digital platform.",
    heroImage: `${serviceDetailsPath}/event-platform-services.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "In today's digital-first world, an event's success often hinges on the robustness and intuitiveness of its digital platform. At DXG, our Event Platform Services are designed to bridge the gap between physical and digital event experiences. We offer a range of digital solutions, from live streaming to session records and virtual event platforms for live and on-demand viewing, ensuring your event easily reaches a global audience. Our platforms are user-friendly, highly interactive, and customizable to suit the specific needs of your event.",

      " Whether it's a hybrid conference, a virtual seminar, or an online product launch, our platforms facilitate seamless engagement, allowing attendees to connect, interact, and participate anywhere in the world. We integrate the latest digital technology to provide stable, secure, and scalable solutions, ensuring that your event is not just a broadcast but a fully immersive digital experience.",
    ],
  },
  {
    slug: "event-experience-design",
    icon: "/images/problems-we-solve/event-experience-design.png",
    title: "Event Experience Design",
    desc: "At DXG, we believe that the heart of every memorable event lies in its experience design.",
    heroImage: `${serviceDetailsPath}/event-experience-design.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "At DXG, we believe that the heart of every memorable event lies in its experience design. Our Event Experience Design service is dedicated to creating immersive and impactful environments that resonate with your audience. We blend creativity with strategic planning to craft experiences that are not only visually stunning but also emotionally engaging and in line with your brand's message.",

      " Our team of experienced designers and planners work closely with you to understand your vision and audience, ensuring every aspect of the event, from the decor to the lighting and sound, is meticulously tailored to create the desired atmosphere and mood. Whether it's a corporate gala, a product launch, or a thematic exhibition, we bring your story to life in a way that captivates, inspires, and leaves a lasting impression on every attendee.",
    ],
  },
  {
    slug: "graphics-animation",
    icon: "/images/problems-we-solve/graphics-animation.png",
    title: "Graphics & Animation",
    desc: "In the dynamic world of events, captivating visuals can make a profound impact.",
    heroImage: `${serviceDetailsPath}/graphics-animation.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "In the dynamic world of events, captivating visuals can make a profound impact. At DXG, our Graphics and Animation services are designed to bring your event's narrative to life. Our skilled graphic designers and animators specialize in creating custom, high-quality visual content that resonates with your audience and leaves a lasting impression.",

      " Whether sophisticated 3D animations, engaging motion graphics, impactful stage backdrops, or stunning visual effects, our creations are tailored to complement your event's theme and amplify its message. We understand that each element of graphic design plays a crucial role in storytelling, and we're committed to ensuring that your visuals look spectacular and communicate your message effectively.",
    ],
  },
  {
    slug: "photography-videography",
    icon: "/images/problems-we-solve/photography-videography.png",
    title: "Photography & Videography",
    desc: "Capturing the essence and energy of your event is an art, and at DXG our services excel in it.",
    heroImage: `${serviceDetailsPath}/photography-videography.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "Capturing the essence and energy of your event is an art, and at DXG, our Photography and Videography services excel in this art. We understand that each event is a unique story waiting to be told, and our professional photographers and videographers are masters at narrating these stories through stunning visuals. With a keen eye for detail and a passion for perfection, we document your event as it happens and the emotions and moments that define it.",

      " From candid shots that capture the spirit of the occasion to high-definition videos that bring the event's narrative to life, our visual storytelling ensures that the memories of your event endure long after the final curtain. Our approach is unobtrusive yet comprehensive, ensuring that we capture the essence of your event from every angle without disrupting the experience. With our photography and videography, your event is not just an occasion but a timeless story beautifully preserved.",
    ],
  },
];
*/

export const problemServices: ProblemService[] = [
  {
    slug: "general-session",
    icon: "/images/problems-we-solve/production-management.png",
    title: "General Session",
    desc: "Main-stage production with clean audio, confident camera direction, presenter support, and a producer keeping the show moving.",
    heroImage: `${serviceDetailsPath}/General-Session.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "The general session is the moment everything you've planned becomes visible. When the room goes dark and your opening video rolls, there's no second take.",

      "Our team produces general sessions with the calm precision that comes from having done this thousands of times: clean audio, confident camera direction, presenters who feel supported the moment they step on stage, and a producer in your ear who anticipates what's next before you have to ask. You'll feel the difference in the room.",
    ],
  },
  {
    slug: "breakouts",
    icon: "/images/problems-we-solve/audiovisual-technology.png",
    title: "Breakouts",
    desc: "Parallel room support with the same technical standards, pre-show checks, and calm crew presence as your main stage.",
    heroImage: `${serviceDetailsPath}/Breakouts.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "Experienced planners know breakouts often carry more weight than the general session. They're where attendees connect with content that's directly relevant to their work, and where the program either delivers on its promise or falls flat.",

      "Ten rooms running in parallel means ten chances for a dead mic, a missing HDMI, or a presenter who walks in five minutes before go-time with a deck that won't load.",

      "We bring the same attention to detail to every breakout that we bring to the main stage: same technical standards, same pre-show checks, same calm presence in the room. You shouldn't have to be in ten places at once, and with us, you don't.",
    ],
  },
  {
    slug: "hybrid-virtual",
    icon: "/images/problems-we-solve/event-platform-services.png",
    title: "Hybrid & Virtual",
    desc: "Connected room-and-screen production that keeps remote and in-person audiences engaged in the same event.",
    heroImage: `${serviceDetailsPath}/Hybrid-&-Virtual.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "A hybrid event isn't an in-person event with a camera in the back of the room. The remote audience either feels included, or they drop off, and the in-room energy either translates to the stream or it doesn't.",

      "We build hybrid and virtual experiences as two connected productions: one for the room, one for the screen. With the technical infrastructure, on-camera direction, and platform expertise to support both audiences, your remote attendees get more than a livestream and your in-room attendees still get your full attention.",
    ],
  },
  {
    slug: "content-capture",
    icon: "/images/problems-we-solve/photography-videography.png",
    title: "Content Capture",
    desc: "Photo and video capture planned around recap reels, speaker cuts, sponsor deliverables, and stakeholder proof points.",
    heroImage: `${serviceDetailsPath}/Content-Capture.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "The event ends and the content begins its second life. Recap videos, speaker reels, social cutdowns, sponsor deliverables - the footage you capture on-site determines what you can actually do with it later.",

      "Our photo and video team shoots with the edit in mind from the first frame, working from a shot list built around how you'll use the content, not just what happened that day. You leave the event with assets your marketing team can actually use and the proof points your stakeholders want to see.",
    ],
  },
  {
    slug: "creative-design",
    icon: "/images/problems-we-solve/graphics-animation.png",
    title: "Creative Design",
    desc: "Stage design, motion graphics, environmental branding, and templates that make the whole event feel intentional.",
    heroImage: `${serviceDetailsPath}/Creative-Design.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "Strong production needs a strong creative idea behind it, or it ends up looking like a stage with some lights on it.",

      "We help shape the visual language of your event: stage design, motion graphics, environmental branding, and content templates, so every screen, surface, and transition feels like it belongs to the same story.",

      "Whether you're bringing a fully built creative brief or starting from a theme on a napkin, we meet you where you are and build from there. Your event should look like it was designed, not assembled.",
    ],
  },
  {
    slug: "meeting-planning-support",
    icon: "/images/problems-we-solve/event-experience-design.png",
    title: "Meeting Planning Support",
    desc: "Flexible planning help, technical advising, and production logistics support when your team needs extra bandwidth.",
    heroImage: `${serviceDetailsPath}/Meeting-Planning-Support.png`,
    bannerImage: "/images/banners/problems-we-solve-banner.png",
    details: [
      "Sometimes the gap between a great plan and a great event is bandwidth. Whether you need a second set of hands on production logistics, a technical advisor in your planning meetings, or a partner who can quietly take work off your plate in the final two weeks, we're built to flex with you.",

      "We've sat in your seat enough times to know which decisions matter, which ones can wait, and which ones need a backup plan. You don't have to carry it all yourself.",
    ],
  },
];

export function getProblemService(slug: string) {
  return problemServices.find((service) => service.slug === slug);
}
