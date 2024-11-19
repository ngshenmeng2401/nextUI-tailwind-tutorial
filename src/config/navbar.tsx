export type NavbarConfigProps = {
  key: string,
  url: string,
  label: string,
  target?: "_blank",
};

export const navbarItemList: NavbarConfigProps[] = [
  {
    key: "home",
    url: "/",
    label: "home_text",
  },
  {
    key: "launch",
    url: "/launch",
    label: "launch_text",
  },
  {
    key: "ranking",
    url: "/ranking",
    label: "ranking_text",
  },
  {
    key: "docs",
    url: "/docs",
    label: "docs_text",
  },
  {
    key: "portfolio",
    url: "/portfolio",
    label: "portfolio_text",
  },
];