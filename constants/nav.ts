type NavItem = {
  id: number;
  name: string;
  type: string;
};

type NavIconItem = {
  id: number;
  url: string;
};

export const NavData: NavItem[] = [
  {
    id: 1,
    name: "project",
    type: "project",
  },
  {
    id: 2,
    name: "contact",
    type: "contact",
  },
  {
    id: 3,
    name: "resume",
    type: "resume",
  },
];

export const NavIcons: NavIconItem[] = [
  {
    id: 1,
    url: "/icons/wifi.svg",
  },
  {
    id: 2,
    url: "/icons/search.svg",
  },
  {
    id: 3,
    url: "/icons/user.svg",
  },
  {
    id: 4,
    url: "/icons/mode.svg",
  },
];
