'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import data from '../../../data';
const imgs = ['/app14.png', '/pixel7.png', '/motorzb.png', '/samflipb.png'];
const Hero = ({children}) => {
  const [images, setImages] = useState(imgs);
  let [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < images.length-1  ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className=" flex  items-center justify-around py-5 my-5 md:my-16">
        <div className="py-12">
          <h1 className="sm:text-xl md:text-6xl font-semibold">
            موبایلهای <span className="text-primary">هوشمند</span>
          </h1>
          <p className="mt-4 md:text-xl text-gray-600">
            کیفیت برتر با بهترین ساختار
          </p>
        </div>
        <div className="flex  justify-center gap-2 duration-1000 w-36 h-36 md:w-52 md:h-52 relative">
          <Image
            width={144}
            height={144}
            src={images[index]}
            alt={`Image ${index + 1}`}
            key={images}
            priority={''}
          />
        </div>
      </section>
      {children}
    </>
  );
};

export default Hero;

// if (index < images.length) {
//   setIndex((prevIndex) => prevIndex + 1);
//    return images.slice(0, index);
// } else {
//   setIndex(0);
// }
// index < images.length ? setIndex((prevIndex) => (prevIndex + 1)): setIndex( 0)
