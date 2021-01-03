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
      name: "Home",
      submenu: [
        {
          name: "About Me",
          href: "#",
          submenu: [
            {
              name: "Home1",
              submenu: [
                {
                  name: "About Me2",
                  href: "#",
                },
                {
                  name: "Projects3",
                  href: "#",
                },
              ],
            },
            {
              name: "To-Do App4",
              submenu: [
                {
                  name: "About Me5",
                  href: "#",
                },
                {
                  name: "Projects6",
                  href: "#",
                },
              ],
            },
            {
              name: "E-commerce Site7",
              submenu: [
                {
                  name: "About Me8",
                  href: "#",
                },
                {
                  name: "Projects9",
                  href: "#",
                },
              ],
            },
          ],
        },
        {
          name: "Projects10",
          href: "#",
        },
      ],
    },
    {
      name: "To-Do App11",
      submenu: [
        {
          name: "About Me12",
          href: "#",
        },
        {
          name: "Projects13",
          href: "#",
        },
      ],
    },
    {
      name: "E-commerce Site14",
      submenu: [
        {
          name: "About Me15",
          href: "#",
        },
        {
          name: "Projects16",
          href: "#",
        },
      ],
    },
  ];
  navItems.forEach((item) => assignUuid(item));
  return navItems;
}
