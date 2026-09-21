export interface Institution {
  id: string;
  name: string;
  category: "Schools" | "Pre-University" | "Higher Education" | "Research" | "Other";
  location: string;
  description: string;
  image: string;
  slug: string;
}

export const institutions: Institution[] = [
  {
    id: "1",
    name: "Sri Lakshmi Vidyaniketan",
    category: "Schools",
    location: "[Location Placeholder]",
    description:
      "A premier institution laying the foundation for lifelong learning through innovative teaching methodologies and values-based education.",
    image: "/images/institution-1.jpg",
    slug: "institution-1",
  },
  {
    id: "2",
    name: "Sri Lakshmi PU College",
    category: "Pre-University",
    location: "[Location Placeholder]",
    description:
      "Fostering academic excellence and holistic development at the critical pre-university stage with state-of-the-art facilities.",
    image: "/images/institution-2.jpg",
    slug: "institution-2",
  },
  {
    id: "3",
    name: "Sri Lakshmi Degree College",
    category: "Higher Education",
    location: "[Location Placeholder]",
    description:
      "Empowering graduates with knowledge, skills, and ethical values to excel in their chosen fields and contribute to society.",
    image: "/images/institution-3.jpg",
    slug: "institution-3",
  },
];

export const institutionFilters = [
  "All",
  "Schools",
  "Pre-University",
  "Higher Education",
  "Research",
  "Other Institutions",
];
