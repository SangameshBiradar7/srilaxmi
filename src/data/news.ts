export interface NewsItem {
  id: string;
  date: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  slug: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "September 2026",
    category: "Announcement",
    headline: "New Academic Session Admissions Now Open",
    description:
      "Applications are now being accepted for the upcoming academic year across all institutions under the Sri Lakshmi Vidyaniketan umbrella.",
    image: "/images/news-1.jpg",
    slug: "admissions-2026",
  },
  {
    id: "2",
    date: "August 2026",
    category: "Achievement",
    headline: "Students Excel in National Level Examinations",
    description:
      "Our students have brought laurels to the institution with outstanding performance in national-level competitive examinations.",
    image: "/images/news-2.jpg",
    slug: "students-excel-2026",
  },
  {
    id: "3",
    date: "July 2026",
    category: "Campus News",
    headline: "New State-of-the-Art Laboratory Inaugurated",
    description:
      "A cutting-edge research and innovation laboratory has been inaugurated to foster scientific exploration and hands-on learning.",
    image: "/images/news-3.jpg",
    slug: "new-laboratory-2026",
  },
];
