'use client';
import { useState } from 'react';
import Access from "./Access";
import Banner from "./Banner";
import Fitness from "./Fitness";
import Footer from "./Footer";
import MobileBox from "./MobileBox";
import Slider from "./Slider";
import Testimonial from "./Testimonial";
import { ModalProvider } from "./ModalContext";
import CookieConsent from '../legal/CookieConsent';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const [status, setStatus] = useState('Banner is showing');

  const handleAccept = () => {
    setShowBanner(false);
    setStatus('Cookies accepted');
  };

  const handleDecline = () => {
    setShowBanner(false);
    setStatus('Cookies declined');
  };

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