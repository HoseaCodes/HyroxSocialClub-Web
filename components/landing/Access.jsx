'use client';

import BoxText from "./BoxText";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { useModal } from "./ModalContext";

const Access = () => {
  const { openWaitlistModal } = useModal();

  return (
    <section className="bg-access-image rounded-[35px] overflow-hidden bg-[#1A1F2E] bg-center bg-full">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 flex gap-5 justify-between items-center h-[725px] sm:h-[650px] flex-col sm:flex-row sm:py-0 pt-10">
        <div className="flex flex-col gap-5 w-full sm:w-[63%]">
          <BoxText color="text-white" style="max-w-[210px]">
            Early Access Incentives
          </BoxText>
          <Heading color="text-white" style="lg:mr-32">
            Join the Waitlist & Get Exclusive Perks
          </Heading>

          <Paragraph color="text-white" style="">
            Be one of the first to experience AI-powered fitness with exclusive
            benefits.
          </Paragraph>

          <Button onClick={openWaitlistModal}>Join Waitlist</Button>
        </div>
        <div className="w-full sm:w-[37%] relative h-full -mt-10 sm:mt-0">
          <img src="/notify.png" alt="mobile" className="absolute -bottom-2" />
        </div>
      </div>
    </section>
  );
};

export default Access;