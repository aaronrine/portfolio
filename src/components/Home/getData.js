import todoAppScreenshot from "../../assets/todo-app-phone-cropped.png";

export function getData() {
  const data = {
    projects: [
      {
        name: "Todo-App",
        thumb: todoAppScreenshot,
        alt: "Todo app screenshot",
        desc: "List and track the status of your tasks.",
      },
      {
        name: "Wordpress Website",
        thumb: todoAppScreenshot,
        alt: "Wordpress website screenshot",
        desc: "E-commerce site selling fabric products.",
      },
      {
        name: "Todo-App3",
        thumb: todoAppScreenshot,
        alt: "Todo app screenshot",
        desc: "List and track the status of your tasks.",
      },
      {
        name: "Todo-App4",
        thumb: todoAppScreenshot,
        alt: "Todo app screenshot",
        desc: "List and track the status of your tasks.",
      },
    ],
  };
  return data;
}
