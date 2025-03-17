"use client";

import BoxText from "./BoxText";
import Heading from "./Heading";

const Testimonial = () => {
  return (
    <section className=" rounded-[35px] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex gap-5  justify-between items-center pt-10">
        <div className=" flex flex-col gap-5 w-full">
          <BoxText color="text-black" style="max-w-[137px]">
            Testimonials
          </BoxText>
          <Heading color="text-black" style="w-full sm:w-[620px]">
            Real People. Real Transformations
          </Heading>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
