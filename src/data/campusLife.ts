export interface CampusLifeCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const campusLifeCategories: CampusLifeCategory[] = [
  { id: "1", title: "Sports", description: "Comprehensive athletic programs fostering teamwork and physical excellence.", image: "/images/campus-sports.jpg", color: "#0B192C" },
  { id: "2", title: "Cultural Activities", description: "Vibrant cultural programs celebrating diversity and artistic expression.", image: "/images/campus-cultural.jpg", color: "#C5A059" },
  { id: "3", title: "Student Clubs", description: "Diverse clubs and societies nurturing passions beyond academics.", image: "/images/campus-clubs.jpg", color: "#475569" },
  { id: "4", title: "Community Engagement", description: "Meaningful outreach programs connecting students with society.", image: "/images/campus-community.jpg", color: "#64748B" },
  { id: "5", title: "Events", description: "Year-round events creating memorable experiences and lifelong connections.", image: "/images/campus-events.jpg", color: "#0F172A" },
  { id: "6", title: "Leadership", description: "Programs developing confident and compassionate leaders.", image: "/images/campus-leadership.jpg", color: "#0A1128" },
];
