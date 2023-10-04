"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/images/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in Lagos",
    image: "/images/slide2.png",
  },
  {
    id: 1,
    title: "the best pizza to share with your family",
    image: "/images/slide3.jpg",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // useEffect(() => {
  //   const sliderInterval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000,
  //   );

  //   return () => clearInterval(sliderInterval);
  // }, []);

  return (
    <section className="flex h-[calc(100vh-6rem)] flex-col bg-fuchsia-50 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 font-bold text-red-500 ">
        <h2 className="p-4 text-center text-3xl uppercase md:p-10 md:text-5xl xl:text-7xl">
          {data[currentSlide].title}
        </h2>
        <button className="bg-red-500 px-8 py-4 text-white">Order Now</button>
      </div>

      {/* Image Container */}
      <div className="relative w-full flex-1 ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default Slider;
