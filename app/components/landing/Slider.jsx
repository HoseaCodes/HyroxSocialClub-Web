"use client";

// Import Swiper React components and modules
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Unique testimonials array
const testimonials = [
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
  {
    title:
      "PhysiquePro AI made fitness easy! I finally see results without guessing what to do.",
    name: "Alex R.",
    role: "Beta Tester",
  },
];

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      className="my-10 "
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={15}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col gap-10 bg-[#f2f2f2] rounded-[20px] p-8  max-w-[200px] sm:max-w-[350px] "
        >
          <img src="/qoute.svg" alt="" className="w-[27px] h-[20px]" />
          <div className="pt-3 pb-10">
            <span className="text-base sm:text-2xl sm:leading-6 text-black font-medium mr-2">
              {item.title}

              <img
                src="/qoute.svg"
                alt=""
                className=" ml-2 mt-2 w-[27px] h-[20px] inline-flex"
              />
            </span>
          </div>
          <div>
            <p className="font-bold text-black text-xl">{item.name}</p>
            <p className="text-sm text-black">{item.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
