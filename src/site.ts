export const siteConfig = {
  brand: {
    name: "Muffin Services",
    shortName: "Muffin",
    communityName: "Muffin Community",
    copyright: "© 2026 Muffin Services. All rights reserved.",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  discord: {
    name: "Muffin Community",
    onlineCount: "2,500 Online",
    inviteUrl: "YOUR_DISCORD_LINK_HERE",
  },

  hero: {
    eyebrow: "Premium Gaming Optimization Services",
    titleStart: "Unlock Maximum",
    titleEnd: "Performance",
    description:
      "Personalized gaming optimization and performance services designed around your system and gaming needs.",
    primaryCta: "Get Started",
    secondaryCta: "Join Discord",
  },

  services: [
    {
      id: "gaming-optimization",
      title: "Gaming Optimization",
      description:
        "System-focused optimization designed around your gaming setup.",
    },
    {
      id: "fps-boost",
      title: "FPS Boost Package",
      description:
        "Performance-focused tuning aimed at improving gaming smoothness and consistency.",
    },
    {
      id: "windows-optimization",
      title: "Windows Optimization",
      description:
        "Clean and configure Windows settings for a more efficient gaming environment.",
    },
    {
      id: "input-delay",
      title: "Input Delay Reduction",
      description:
        "Tune your system and peripherals for a responsive gaming experience.",
    },
    {
      id: "streaming-optimization",
      title: "Streaming Optimization",
      description:
        "Configure your setup for smoother gaming and content creation workflows.",
    },
    {
      id: "pc-performance-audit",
      title: "PC Performance Audit",
      description:
        "Identify potential performance bottlenecks across your system.",
    },
    {
      id: "custom-performance",
      title: "Custom Performance Package",
      description:
        "A tailored package built around your specific system and requirements.",
    },
  ],

  pricing: [
    {
      id: "free-pack",
      name: "Free Optimization Pack",
      price: "FREE",
      popular: false,
    },
    {
      id: "sensi",
      name: "Sensi",
      price: "₹799",
      popular: false,
    },
    {
      id: "optimization",
      name: "Optimization",
      price: "₹999",
      popular: true,
    },
    {
      id: "sensi-optimization",
      name: "Sensi + Optimization",
      price: "₹1,699",
      popular: false,
    },
  ],

  performance: {
    stats: [
      {
        value: "20,000+",
        label: "Games Optimized",
      },
      {
        value: "99.9%",
        label: "Satisfaction Rate",
      },
      {
        value: "< 24hrs",
        label: "Response Time",
      },
    ],
  },

  testimonials: [],

  faq: [
    {
      question: "How long does optimization take?",
      answer:
        "Optimization time depends on the selected service and the complexity of the system.",
    },
    {
      question: "Is it safe?",
      answer:
        "Services are designed around controlled system changes and clear optimization steps.",
    },
    {
      question: "Will I gain more FPS?",
      answer:
        "Results vary depending on your hardware, software configuration, game, and current system state.",
    },
    {
      question: "Do I need Discord?",
      answer:
        "Discord is used for community and support communication. Your selected service will determine what communication is required.",
    },
    {
      question: "What games are supported?",
      answer:
        "Supported games can vary. Contact us with the game and your system specifications to confirm.",
    },
    {
      question: "How do I book a service?",
      answer:
        "Choose a service or pricing plan and continue through the contact or Discord flow.",
    },
  ],

  footer: {
    description:
      "Premium gaming optimization and performance services.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
} as const;