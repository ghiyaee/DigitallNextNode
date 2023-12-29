'use client';
import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Image from 'next/image';
function Slider() {
  return (
    <>
      <section className="container m-auto bg-primary py-2 md:py-4  rounded-full">
        <p className="text-white text-center text-2xl">دسته بندی محصولات</p>
      </section>
    </>
  );
}
export default Slider;
