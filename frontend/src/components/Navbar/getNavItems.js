import uuid from "react-uuid";
function assignUuid(item) {
  item.uuid = uuid();
  if (item?.submenu) {
    item.submenu.forEach((subItem) => assignUuid(subItem));
  }
}

export function getNavItems() {
  const navItems = [
    {
      name: "Github",
      href: "https://github.com/aaronrine/",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aaron-rine-1903b511a/",
    },
    {
      name: "Resume",
      href: "/resume/",
    },
  ];
  navItems.forEach((item) => assignUuid(item));
  return navItems;
}
