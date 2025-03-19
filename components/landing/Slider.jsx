"use client";

// Import Swiper React components and modules
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

// Unique testimonials array
const testimonials = [
  {
    title:
      "Finally found a program that evolves with me! PhysiquePro AI helped me break through my training plateau.",
    name: "James K.",
    role: "Software Engineer",
  },
  {
    title:
      "As a busy mom, I thought fitness was impossible! PhysiquePro AI's quick workouts changed everything.",
    name: "Sarah M.",
    role: "Working Parent",
  },
  {
    title:
      "My form was wrong for years without knowing it! PhysiquePro AI corrected issues other trainers missed.",
    name: "Michael T.",
    role: "Fitness Enthusiast",
  },
  {
    title:
      "Recovering from injury seemed overwhelming at first! PhysiquePro AI created the perfect rehab program.",
    name: "Elena R.",
    role: "Recovery Athlete",
  },
  {
    title:
      "Never thought I'd get stronger in my late 50s! PhysiquePro AI designed age-perfect training for me.",
    name: "Robert J.",
    role: "Senior Fitness Adopter",
  },
  {
    title:
      "Constant travel used to ruin my fitness routine! PhysiquePro AI adapts to whatever gym I have access to.",
    name: "Priya N.",
    role: "Business Consultant",
  },
  {
    title:
      "The nutrition guidance changed my entire approach! PhysiquePro AI taught me what my body really needs.",
    name: "Daniel W.",
    role: "Nutrition Newcomer",
  },
  {
    title:
      "Training for marathons requires perfect balance! PhysiquePro AI optimized my strength and endurance mix.",
    name: "Tanya L.",
    role: "Marathon Runner",
  },
  {
    title:
      "I used to avoid leg day like the plague itself! PhysiquePro AI made me actually look forward to squats.",
    name: "Marcus H.",
    role: "Former Gym Avoider",
  },
  {
    title:
      "Never believed AI could replace a human trainer! PhysiquePro AI proved me wrong within the first week.",
    name: "Jennifer C.",
    role: "Tech Skeptic Turned Believer",
  },
];

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      className="my-10"
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
          className="flex flex-col bg-[#f2f2f2] rounded-[20px] p-8 h-[350px]"
        >
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <Image src="/qoute.svg" alt="Quote" width={27} height={20} />
            </div>
            
            <div className="flex-grow h-48">
              <p className="text-base sm:text-2xl sm:leading-6 text-black font-medium">
                {item.title}
                <Image
                  src="/qoute.svg"
                  alt="Quote"
                  width={27}
                  height={20}
                  className="ml-2 mt-2 w-[27px] h-[20px] inline-flex"
                />
              </p>
            </div>
            
            <div className="mt-auto">
              <p className="font-bold text-black text-xl">{item.name}</p>
              <p className="text-sm text-black">{item.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}