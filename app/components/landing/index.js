'use client';

import Access from "./Access";
import Banner from "./Banner";
import Fitness from "./Fitness";
import Footer from "./Footer";
import MobileBox from "./MobileBox";
import Slider from "./Slider";
import Testimonial from "./Testimonial";
import { ModalProvider } from "./ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <section className="mx-5 sm:mx-8 flex flex-col gap-5">
        <Banner />
        <MobileBox />
        <Testimonial />
      </section>
      <Slider />
      <section className="mx-5 sm:mx-8 flex flex-col gap-5">
        <Access />
        <Fitness />
        <Footer />
      </section>
    </ModalProvider>
  );
}