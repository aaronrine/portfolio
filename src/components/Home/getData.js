import todoAppScreenshot from "../../assets/todo-app-phone-cropped.png";
import propocketCheckout from "../../assets/propocket-checkout.png";
import propocketDesktopShop from "../../assets/propocket-desktop-shop.png";
import propocketDesktop from "../../assets/propocket-desktop-cropped.png";
import propocketPhoneShop from "../../assets/propocket-phone-shop.png";
import propocketPhone from "../../assets/propocket-phone.png";
import todoAppDesktop from "../../assets/todo-app-desktop.png";

export function getData() {
  const data = {
    projects: [
      {
        name: "Todo-App",
        thumb: todoAppScreenshot,
        alt:
          "Mobile view of ToDo app. Three todos are in a column beneath a text field. One todo is marked complete.",
        images: [
          {
            source: todoAppDesktop,
            alt:
              "Desktop view of ToDo app. Three todos are in a row below a text field. One todo is marked complete.",
          },
          {
            source: todoAppScreenshot,
            alt:
              "Mobile view of ToDo app. Three todos are in a column beneath a text field. One todo is marked complete.",
          },
        ],
        shortDesc: "List and track the status of your tasks.",
        desc:
          "For a long time I've had an issue of making a todo list on paper and losing it. Wanting to learn more about web development and needing a new todo, I made this humble todo app complete with CRUD. After adding a local storage hook, I now use it near daily to keep track of my tasks.",
        tech: ["HTML", "CSS", "JS", "SCSS", "React", "Docker", "Git"],
        learned:
          "Most issues that popped up were state management: trying to figure out where the state lives and what lives in it. While I'm no expert, this project helped me understand the flow of state significantly more.",
        liked:
          "The near magic of having the app remember your data with a clever use of a local storage hook. That was the part that brought the app from an interesting experiment into something that actually provides value.",
        disliked:
          "The update function. It was far and away the most complicated part of the app and required entire rewrites to the way state lived.",
        gitDemoLink: "",
        uuid: "103de1b-6c1e-c255-8784-fffaa2cdf4c",
      },
      {
        name: "Wordpress Website",
        thumb: propocketPhone,
        alt: "Wordpress website screenshot",
        images: [
          {
            source: propocketCheckout,
            alt:
              "Checkout screen showing a small pro-pocket being bought using paypal api",
          },
          {
            source: propocketDesktop,
            alt:
              "Landing screen of propocket.biz as seen on desktop. Three best sellers are shown beneath the logo laden header and navbar",
          },
          {
            source: propocketDesktopShop,
            alt:
              "Main shop of propocket.biz as seen on desktop. A row of four bags with their names and prices are shown alongside a grid of filter options",
          },
          {
            source: propocketPhone,
            alt:
              "Landing screen of propocket.biz as seen on mobile. A single column of best sellers fills the bottom of the screen. The logo takes up the entire header and the navbar is collapsed into three lines.",
          },
          {
            source: propocketPhoneShop,
            alt:
              "Main shop of propocket.biz as seen on mobile. A column of bags with their names and prices are displayed.",
          },
        ],
        shortDesc: "Wordpress e-commerce site with paypal integration",
        desc:
          "Needing an e-commerce website, the family business asked me to build one for them. This was my first website and as I had been studying React, I figured start there. However it became apparent that I didn't know enough to ship the product on time, so I switched tech stacks to wordpress and rapidly deployed it from there.",
        tech: [
          "HTML",
          "CSS",
          "JS",
          "React",
          "SCSS",
          "Wordpress",
          "Paypal API",
          "PHP",
        ],
        learned:
          "The main takeaway from this was that some frameworks and tech stacks work better in different scenarios depending on a business' needs.",
        liked:
          "I enjoyed getting my feet wet in the world of web development and seeing a company use a website that I built.",
        disliked:
          "Intitially learning Paypal API was frustrating and took the better part of a week. I was learning what api's were at the same time that I was trying to implement one that also required some housekeeping.",
        gitDemoLink: "",
        uuid: "7bbfa28-1d6-5132-055-0edc1164e37",
      },
    ],
  };
  return data;
}
