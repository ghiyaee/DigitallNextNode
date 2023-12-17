import React from 'react'
import data from '../../../data'
import Image from 'next/image';
function ListProducts() {
  return (
    <section className="flex flex-col md:flex-row justify-center flex-wrap gap-6 mt-4">
      {data.products.map((pro) => (
        <div
          className="flex  justify-center items-center gap-8 p-4 
        hover:scale-105 duration-700 rounded-md 
        shadow-[0_25px_25px_-24px_rgb(0,0,0,0.3)] "
        >
          <div className="w-36 h-36 md:w-52 md:h-52 relative ">
            <Image
              layout="fill"
              objectFit="'contain"
              alt="mobile"
              src={'/app14.png'}
            />
          </div>
          <div className="text-gray-500">
            <p>{pro.name}</p>
            <p>{pro.category}</p>
            <p>{pro.price}</p>
            <p>{pro.description}</p>
            <button className="bg-primary text-white px-6 py-1 rounded-full">
              بیشتر...
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ListProducts