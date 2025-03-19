'use client';

import BoxText from "./BoxText";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { useModal } from "./ModalContext";

const Fitness = () => {
  const { openWaitlistModal } = useModal();

  return (
    <section className="rounded-[35px] overflow-hidden fitness-gradient">
      <div className="bg-fitness-image bg-center bg-full">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 flex gap-5 justify-between items-center h-[700px] sm:h-[572px] flex-col sm:flex-row sm:py-0">
          <div className="w-full sm:w-[25%] relative h-full -rotate-45 sm:rotate-0">
            <img
              src="/leftphoneimg.png"
              alt="mobile"
              className="absolute h-[400px] sm:h-full -top-10 sm:top-0 sm:-left-16 -right-16"
            />
          </div>
          <div className="w-full sm:w-[50%] flex flex-col gap-5 items-center">
            <BoxText color="text-black" style="max-w-[135px] sm:max-w-56">
              Waitlist System
            </BoxText>
            <Heading color="text-black" style="" align="text-center">
              Take Control of Your Fitness Journey
            </Heading>
            <Paragraph
              color="text-black"
              style="text-center mx-auto w-[90%] lg:w-[30%]"
            >
              Join thousands of early adopters and experience the future of
              fitness.
            </Paragraph>

            <Button 
              bgcolor="bg-white" 
              color="text-black"
              onClick={openWaitlistModal}
            >
              Join Waitlist
            </Button>
          </div>
          <div className="w-full sm:w-[25%] relative h-full -rotate-45 sm:rotate-0">
            <img
              src="/rightphoneimg.png"
              alt="mobile"
              className="absolute h-[400px] sm:h-full -bottom-10 sm:bottom-0 sm:left-32 -left-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitness;