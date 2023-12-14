import Image from 'next/image';
const Hero = () => {
  return (
    <section className="flex items-center justify-around py-12">
      <div className="py-12">
        <h1 className="sm:text-xl md:text-6xl font-semibold">
          موبایلهای <span className="text-primary">هوشمند</span>
        </h1>
        <p className="mt-4 md:text-xl text-gray-600">
          کیفیت برتر با بهترین ساختار
        </p>
      </div>
      <div className="w-36 h-36 md:w-52 md:h-52 relative">
        <Image
          layout="fill"
          objectFit="'contain"
          alt="mobile"
          src={'/app14.png'}
        />
      </div>
    </section>
  );
};

export default Hero;
