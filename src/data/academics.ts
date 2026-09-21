export interface AcademicArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const academicAreas: AcademicArea[] = [
  { id: "1", title: "Foundational Education", description: "Building strong foundations for lifelong learning with child-centric approaches.", icon: "BookOpen" },
  { id: "2", title: "STEM & Technology", description: "Fostering innovation through science, technology, engineering, and mathematics.", icon: "Cpu" },
  { id: "3", title: "Humanities", description: "Cultivating critical thinking and cultural awareness through liberal arts education.", icon: "Library" },
  { id: "4", title: "Research", description: "Advancing knowledge through rigorous academic inquiry and scholarly research.", icon: "Microscope" },
  { id: "5", title: "Innovation", description: "Nurturing entrepreneurial thinking and creative problem-solving abilities.", icon: "Lightbulb" },
  { id: "6", title: "Skill Development", description: "Equipping students with practical skills for the modern world.", icon: "Wrench" },
  { id: "7", title: "Leadership", description: "Developing tomorrow's leaders with integrity and vision.", icon: "Users" },
  { id: "8", title: "Creative Learning", description: "Encouraging artistic expression and creative exploration.", icon: "Palette" },
];
