export interface GalleryItem {
  id: string;
  category: string;
  src: string;
  alt: string;
  title: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "1", category: "Campus", src: "/images/gallery-1.jpg", alt: "Campus aerial view", title: "Campus Overview" },
  { id: "2", category: "Students", src: "/images/gallery-2.jpg", alt: "Students in classroom", title: "Classroom Learning" },
  { id: "3", category: "Events", src: "/images/gallery-3.jpg", alt: "Annual day celebration", title: "Annual Day" },
  { id: "4", category: "Sports", src: "/images/gallery-4.jpg", alt: "Sports day", title: "Sports Day" },
  { id: "5", category: "Cultural", src: "/images/gallery-5.jpg", alt: "Cultural program", title: "Cultural Fest" },
  { id: "6", category: "Academic", src: "/images/gallery-6.jpg", alt: "Science exhibition", title: "Science Exhibition" },
  { id: "7", category: "Community", src: "/images/gallery-7.jpg", alt: "Community service", title: "Community Outreach" },
  { id: "8", category: "Campus", src: "/images/gallery-8.jpg", alt: "Library", title: "Central Library" },
  { id: "9", category: "Students", src: "/images/gallery-9.jpg", alt: "Students at lab", title: "Laboratory Session" },
];

export const galleryFilters = [
  "All",
  "Campus",
  "Students",
  "Events",
  "Sports",
  "Cultural",
  "Academic",
  "Community",
];
