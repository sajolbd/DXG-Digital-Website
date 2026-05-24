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

export function getProblemService(slug: string) {
  return problemServices.find((service) => service.slug === slug);
}
