// import { useState } from "react";
// import "./Carousel.scss";

// function BtnCarousel({ onclick, btnClasses = "", label = "" }) {
//   return (
//     <button className={btnClasses} type="button" onClick={() => onclick()}>
//       {label}
//     </button>
//   );
// }

// export function Carousel({ items, carouselClasses = "", ItemCard }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [innerComponentClasses, setInnerComponentClasses] = useState("");
//   const [leftAnimate, setLeftAnimate] = useState(0);
//   const [rightAnimate, setRightAnimate] = useState(0);

//   function getPrevIndex() {
//     return activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//   }

//   function getNextIndex() {
//     return activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//   }
//   function setPreviousItem() {
//     setActiveIndex(getPrevIndex());
//     setInnerComponentClasses("left");
//   }
//   function setNextItem() {
//     setActiveIndex(getNextIndex());
//     setInnerComponentClasses("right");
//   }

//   return (
//     <section className={`Carousel ${carouselClasses}`}>
//       <BtnCarousel
//         btnClasses="prev"
//         onclick={() => {
//           setLeftAnimate(1);
//           setPreviousItem();
//         }}
//         label="&lt;"
//       />
//       <ItemCard
//         item={items[getPrevIndex()]}
//         classes={`prev ${innerComponentClasses}`}
//         onAnimationEnd={() => {
//           setLeftAnimate(0);
//           setRightAnimate(0);
//         }}
//         dataLeftAnimate={leftAnimate}
//         dataRightAnimate={rightAnimate}
//       />
//       <ItemCard
//         item={items[activeIndex]}
//         active={true}
//         classes={` ${innerComponentClasses}`}
//         onAnimationStart={() => console.log("started")}
//         onAnimationEnd={() => {
//           setLeftAnimate(0);
//           setRightAnimate(0);
//         }}
//         dataLeftAnimate={leftAnimate}
//         dataRightAnimate={rightAnimate}
//       />
//       <ItemCard
//         item={items[getNextIndex()]}
//         classes={`next ${innerComponentClasses}`}
//         onAnimationEnd={() => {
//           setLeftAnimate(0);
//           setRightAnimate(0);
//         }}
//         dataLeftAnimate={leftAnimate}
//         dataRightAnimate={rightAnimate}
//       />
//       <BtnCarousel
//         btnClasses="next"
//         onclick={() => {
//           setRightAnimate(1);
//           setNextItem();
//         }}
//         label="&gt;"
//       />
//     </section>
//   );
// }

// export default Carousel;

import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./Carousel.scss";

export default function Carousel({ carouselClasses = "", items, ItemCard }) {
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);

  const transitions = useTransition([count], (item) => item, {
    from: {
      opacity: 0,
      transform: reverse ? "translateX(100px)" : "translateX(-100px)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0)",
    },
    leave: {
      opacity: 0,
      transform: reverse ? "translateX(-100px)" : "translateX(100px)",
      position: "absolute",
    },
  });

  const prevSlide = () => {
    let prevSlide = count - 1 < 0 ? items.length - 1 : count - 1;
    setCount(prevSlide);
    setReverse(true);
  };

  const nextSlide = () => {
    let nextSlide = count + 1 < items.length ? count + 1 : 0;
    setCount(nextSlide);
    setReverse(false);
  };

  return (
    <div className={`Carousel ${carouselClasses}`}>
      <div className="container">
        <button className="carousel__prev" onClick={prevSlide}>
          prev
        </button>
        <div className="wrapper">
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <ItemCard item={items[count]} />
            </animated.div>
          ))}
        </div>
        <button className="carousel__next" onClick={nextSlide}>
          next
        </button>
      </div>
    </div>
  );
}

export { Carousel };
