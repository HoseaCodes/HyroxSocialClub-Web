import Image from "next/image";
import BoxText from "./BoxText";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const boxText = [
  {
    text: "AI-Generated Workout Plans (Custom workouts based on goals, experience, and available equipment)",
    icon: "/ai.svg",
  },
  {
    text: "Comprehensive Tracking (Monitor workouts, nutrition, and recovery in one seamless app)",
    icon: "/loc.svg",
  },
  {
    text: "Science-Based Fitness Optimization (Data-driven progress tracking and recommendations)",
    icon: "/setting.svg",
  },
  {
    text: "Personalized AI Insights (Adaptive workouts and motivation based on your habits)",
    icon: "/men.svg",
  },
];

const MobileBox = () => {
  return (
    <section className="bg-custom-gradient rounded-[35px] overflow-hidden">
      <div className="bg-mobile-image bg-center bg-full">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center  gap-5 pt-20">
          <BoxText color="text-black" style="max-w-[163px] sm:max-w-[170px]">
            Featured highlights
          </BoxText>
          <Heading color="text-black" style="" align="text-center">
            Your AI-Powered <br />
            Fitness Partner
          </Heading>

          <Paragraph
            color="text-black"
            style="text-center mx-auto w-[85%] sm:w-[40%]"
          >
            PhysiquePro AI customizes your entire fitness journey—workouts,
            nutrition, and recovery—all in one place.
          </Paragraph>

          <div className="relative w-[600px] h-[500px] mx-auto ">
            <div className="custom-gra"></div>
            <img src="/mobile.png" alt="mobile" className="absolute bottom-0" />
          </div>
          <div className="flex justify-center items-center gap-5 -mt-[384px] pb-16 ml-[275px] sm:ml-0">
            {boxText.map((item, index) => (
              <div
                key={index}
                className="h-[250px] w-[250px] custom-filter p-7 flex flex-col gap-5"
              >
                <Image src={item.icon} height={50} width={50} />
                <p className="font-medium text-[20px] leading-[22px] text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBox;
