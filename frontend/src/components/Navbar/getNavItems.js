import uuid from "react-uuid";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
function assignUuid(item) {
  item.uuid = uuid();
  if (item?.submenu) {
    item.submenu.forEach((subItem) => assignUuid(subItem));
  }
}

export function getNavItems() {
  const navItems = [
    {
      name: faGithubSquare,
      href: "https://github.com/aaronrine/",
    },
    {
      name: faLinkedin,
      href: "https://www.linkedin.com/in/aaron-rine-1903b511a/",
    },
    {
      name: faAddressCard,
      href: "/resume/",
    },
  ];
  navItems.forEach((item) => assignUuid(item));
  return navItems;
}
