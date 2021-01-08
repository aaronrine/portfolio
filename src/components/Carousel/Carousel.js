import { useState } from "react";

function BtnCarousel({ onclick, classes = "", label = "" }) {
  return (
    <button className={classes} type="button" onClick={() => onclick()}>
      {label}
    </button>
  );
}

export function Carousel({ items, classes = "", ItemCard, itemProps }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function getPrevIndex() {
    return activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  }

  function getNextIndex() {
    return activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  }
  function setPreviousItem() {
    setActiveIndex(getPrevIndex());
  }
  function setNextItem() {
    setActiveIndex(getNextIndex());
  }

  return (
    <section className={`Carousel ${classes}`}>
      <BtnCarousel classes="prev" onclick={setPreviousItem} label="&lt;" />
      <ItemCard item={items[getPrevIndex()]} {...{ ...itemProps.previous }} />
      <ItemCard item={items[activeIndex]} {...{ ...itemProps.current }} />
      <ItemCard item={items[getNextIndex()]} {...{ ...itemProps.next }} />
      <BtnCarousel classes="next" onclick={setNextItem} label="&gt;" />
    </section>
  );
}

export default Carousel;
