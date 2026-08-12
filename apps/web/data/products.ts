export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
};


export const products: Product[] = [

  {
    slug: "linkresan",
    name: "LinkResan",
    category: "Digital Communication Platform",
    tagline:
      "Connecting businesses and customers through intelligent digital experiences.",
    description:
      "LinkResan is a digital communication ecosystem designed to improve customer interaction, business communication and online engagement.",
    features: [
      "Smart Communication",
      "Business Tools",
      "Customer Experience",
      "Digital Automation"
    ],
    technologies: [
      "AI",
      "Cloud Platform",
      "Modern Web Architecture"
    ]
  },


  {
    slug: "farsi-smart-assistant",
    name: "Farsi Smart Assistant",
    category: "Artificial Intelligence Platform",
    tagline:
      "Persian language intelligence powered by artificial intelligence.",
    description:
      "An AI platform focused on Persian language understanding, smart assistance and intelligent interactions.",
    features: [
      "Natural Language Processing",
      "AI Assistant",
      "Knowledge Management",
      "Smart Automation"
    ],
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "LLM"
    ]
  },


  {
    slug: "ava",
    name: "Ava",
    category: "AI Experience Platform",
    tagline:
      "Building intelligent interactions between humans and technology.",
    description:
      "Ava is an artificial intelligence experience designed for modern digital environments.",
    features: [
      "AI Interaction",
      "Smart Experience",
      "Automation"
    ],
    technologies: [
      "AI",
      "Voice Technology",
      "Software Engineering"
    ]
  },


  {
    slug: "fekrava",
    name: "Fekrava",
    category: "AI Knowledge Platform",
    tagline:
      "Transforming information into intelligent knowledge.",
    description:
      "Fekrava is an intelligent platform for managing knowledge and improving productivity.",
    features: [
      "Knowledge Intelligence",
      "Smart Search",
      "Productivity Tools"
    ],
    technologies: [
      "AI",
      "Data Processing",
      "Cloud"
    ]
  },


  {
    slug: "filmtrack",
    name: "FilmTrack",
    category: "Entertainment Technology",
    tagline:
      "A smarter way to track and explore digital entertainment.",
    description:
      "FilmTrack provides a modern experience for discovering and managing movies and entertainment content.",
    features: [
      "Content Discovery",
      "Tracking System",
      "Personal Experience"
    ],
    technologies: [
      "Web Platform",
      "Data Systems"
    ]
  },


  {
    slug: "football-fan-app",
    name: "Football Fan App",
    category: "Sports Technology",
    tagline:
      "Creating digital experiences for football communities.",
    description:
      "A technology platform designed for football fans and digital sports engagement.",
    features: [
      "Fan Experience",
      "Sports Content",
      "Community Platform"
    ],
    technologies: [
      "Mobile Technology",
      "Digital Platforms"
    ]
  },


  {
    slug: "shiftpay",
    name: "ShiftPay",
    category: "Financial Technology",
    tagline:
      "Modern payment experiences for digital businesses.",
    description:
      "ShiftPay focuses on building efficient payment and financial technology solutions.",
    features: [
      "Payment Experience",
      "Digital Finance",
      "Automation"
    ],
    technologies: [
      "FinTech",
      "Secure Systems"
    ]
  },


  {
    slug: "primesys",
    name: "PrimeSYS",
    category: "Enterprise Software",
    tagline:
      "Enterprise software solutions for digital transformation.",
    description:
      "PrimeSYS provides software architecture and business automation solutions.",
    features: [
      "Enterprise Systems",
      "Automation",
      "Digital Transformation"
    ],
    technologies: [
      "Software Architecture",
      "Cloud",
      "Backend Systems"
    ]
  }

];