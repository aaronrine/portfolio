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
      name: "Who I am",
      href: "aboutme",
    },
    {
      name: "My Work",
      href: "projects",
    },
  ];
  navItems.forEach((item) => assignUuid(item));
  return navItems;
}
