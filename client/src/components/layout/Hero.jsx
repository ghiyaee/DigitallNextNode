'use client';
import Image from 'next/image';
import SearchBr from './SearchBr';
import ListProducts from './ListProducts';
import { useEffect, useState } from 'react';
const Hero = () => {
  const imgs = ['/app14.png', '/pixel7.png', '/motorzb.png', '/samflipb.png'];
  let [img, setImg] = useState(0);
  useEffect(() => {
    if (img < imgs.length) {
      setTimeout(() => setImg(img + 1), 3000);
    } else {
      setImg(0)
    }
  }, [img]);
  return (
    <>
      <SearchBr />
      <section className=" flex items-center justify-around py-5 my-5 md:my-16">
        <div className="py-12">
          <h1 className="sm:text-xl md:text-6xl font-semibold">
            موبایلهای <span className="text-primary">هوشمند</span>
          </h1>
          <p className="mt-4 md:text-xl text-gray-600">
            کیفیت برتر با بهترین ساختار
          </p>
        </div>
        <div className="flex  w-36 h-36 md:w-52 md:h-52 relative">
          {imgs.map((l, i) =>
            i <= img ? (
              <Image
                layout="fill"
                objectFit="'contain"
                alt="mobile"
                src={l}
                key={i}
              />
            ) : (
             null
            )
          )}
        </div>
      </section>
      <ListProducts />
    </>
  );
};

export default Hero;
