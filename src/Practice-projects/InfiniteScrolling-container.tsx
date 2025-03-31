import { useEffect, useState } from "react";
import InfiniteScrolling from "./InfiniteScrolling";

export default function InfiniteScrollingContainer() {
  const [divList, setDivList] = useState<number[]>([1, 1, 1, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observEle) => {
        if (observEle[0].isIntersecting) {
          observer.unobserve(lastElement!);
          setDivList((lastValue) => [...lastValue, ...new Array(4).fill(1)]);
        }
      },
      { threshold: 0.5 }
    );

    const lastElement = document.querySelector(".card:last-child");
    if (!lastElement) return;
    observer.observe(lastElement!);

    return () => {
      observer.unobserve(lastElement!);
    };
  }, [divList]);
  return (
    <>
      <InfiniteScrolling key={"hello"} list={divList} />
    </>
  );
}
