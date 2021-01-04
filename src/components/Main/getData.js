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
        name: "Todo-App2",
        thumb: todoAppScreenshot,
        alt: "Todo app screenshot",
        desc: "List and track the status of your tasks.",
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
