import todoAppScreenshot from "../../assets/todo-app-phone-cropped.png";
import propocketCheckout from "../../assets/propocket-checkout.png";
import propocketDesktopShop from "../../assets/propocket-desktop-shop.png";
import propocketDesktop from "../../assets/propocket-desktop-cropped.png";
import propocketPhoneShop from "../../assets/propocket-phone-shop.png";
import propocketPhone from "../../assets/propocket-phone.png";

export function getData() {
  const data = {
    projects: [
      {
        name: "Todo-App",
        thumb: todoAppScreenshot,
        mobileImg: "",
        desktopImg: "",
        alt: "Todo app screenshot",
        shortDesc: "Wordpress e-commerce site with paypal integration",

        desc: "List and track the status of your tasks.",
        tech: ["html", "css", "js"],
        learned: "lorem",
        liked: "ipsum",
        disliked: "semper",
        gitDemoLink: "",
        uuid: "103de1b-6c1e-c255-8784-fffaa2cdf4c",
      },
      {
        name: "Wordpress Website",
        thumb: todoAppScreenshot,
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
      {
        name: "Todo-App3",
        thumb: todoAppScreenshot,
        mobileImg: "",
        desktopImg: "",
        alt: "Todo app screenshot",
        shortDesc: "Wordpress e-commerce site with paypal integration",

        desc: "List and track the status of your tasks.",
        tech: ["html", "css", "js"],
        learned: "lorem",
        liked: "ipsum",
        disliked: "semper",
        gitDemoLink: "",
        uuid: "d71a7cc-84f6-f4e3-c561-ac2ff4e73e6",
      },
      {
        name: "Todo-App4",
        thumb: todoAppScreenshot,
        mobileImg: "",
        desktopImg: "",
        alt: "Todo app screenshot",
        shortDesc: "Wordpress e-commerce site with paypal integration",

        desc: "List and track the status of your tasks.",
        tech: ["html", "css", "js"],
        learned: "lorem",
        liked: "ipsum",
        disliked: "semper",
        gitDemoLink: "",
        uuid: "560d11-4e16-e5f5-a3a-a36a453bcbc",
      },
    ],
  };
  return data;
}
