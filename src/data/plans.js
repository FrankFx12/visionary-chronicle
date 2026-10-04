/**
 * Independent Elon Musk Fan Portal.
 * Explore technology, space exploration, artificial intelligence, and innovation.
 * Membership benefits must be provided as described. This website is not
 * operated, endorsed, or officially affiliated with Elon Musk or his companies.
 */

export const PLANS = [
  {
    id: "starter",
    name: "STARTER",
    amount: 700,
    tagline: "Your starting point for exploring innovation and technology.",
    featured: true,
    benefits: [
      "Access to the Elon Musk fan portal",
      "Elon Musk biography and career timeline",
      "Explore Tesla and electric vehicle innovation",
      "Discover SpaceX missions and rocket technology",
      "Technology news and educational articles",
    ],
  },
  {
    id: "regular",
    name: "REGULAR",
    amount: 1500,
    tagline: "Explore more of the ideas shaping tomorrow.",
    featured: true,
    benefits: [
      "Everything included in Starter",
      "Expanded space exploration content",
      "Explore artificial intelligence developments",
      "Exclusive member articles and feature stories",
      "Priority access to fan community activities",
      "Member profile and digital membership card",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    amount: 2000,
    tagline: "A premium experience for dedicated technology enthusiasts.",
    featured: true,
    benefits: [
      "Everything included in Regular",
      "VIP digital membership card",
      "In-depth technology and innovation features",
      "Dedicated VIP community section",
      "Priority access to eligible online fan events",
      "VIP announcements and community updates",
    ],
  },
  {
    id: "vvip",
    name: "PREMIUM",
    amount: 2500,
    tagline: "The complete fan portal experience.",
    featured: true,
    benefits: [
      "Everything included in VIP",
      "Premium digital membership card",
      "Exclusive fan content and special features",
      "Premium community access",
      "Priority invitations to eligible virtual events",
      "Meet-and-greet announcements if officially arranged",
      "Premium member updates and technology highlights",
    ],
  },
];

export function getPlanById(id) {
  return PLANS.find((p) => p.id === id);
}