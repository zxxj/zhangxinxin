type PostItem = {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
};

export const blogPosts: PostItem[] = [
  {
    id: 1,
    date: "Mar 2026",
    title: "test post one",
    image: "/images/blog1.png",
    link: "https://www.baidu.com",
  },
  {
    id: 2,
    date: "2024",
    title: "test post two",
    image: "/images/blog2.png",
    link: "https://www.baidu.com",
  },
  {
    id: 3,
    date: "2024",
    title: "test post three",
    image: "/images/blog3.png",
    link: "https://www.baidu.com",
  },
];
