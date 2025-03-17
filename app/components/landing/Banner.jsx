'use client';

import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { useModal } from "./ModalContext";

const Banner = () => {
  const { openWaitlistModal } = useModal();

  return (
    <section className="bg-custom-gradient rounded-[35px] ">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center min-h-[90vh] gap-0 sm:gap-5 sm:flex-row flex-col lg:py-0 pt-10">
        <div className="flex flex-col gap-6 mb-5 w-full sm:w-[49%]">
          <Heading color="text-black" style="mr-6">
            PhysiquePro AI – <br />
            Unlock Your Ultimate Potential.
          </Heading>
          <Paragraph color="text-black" style="w-[90%] sm:w-[80%]">
            Track your workouts, monitor your progress, and stay motivated with
            our easy-to-use health and fitness mobile app.
          </Paragraph>

          <Button onClick={openWaitlistModal}>Join Waitlist</Button>
        </div>
        <div className="flex flex-col justify-end h-full w-full sm:w-[51%] -mt-10 sm:mt-0">
          <img src="/girl.png" className="w-full h-full object-cover" alt="Fitness woman" />
        </div>
      </div>
    </section>
  );
};

export default Banner;