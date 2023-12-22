import React from 'react';
import Image from 'next/image';
// import dbConnect from '@/dbConnect';
// import Product from '@/models/Products';
 function ListProducts({ products }) {
  return (
    <section className="flex flex-col md:flex-row justify-center flex-wrap gap-6 mt-4">
      {products?.map((pro) => (
        <div
          key={pro.id}
          className="flex  justify-center items-center gap-8 p-4 
        hover:scale-105 duration-700 rounded-lg 
        shadow-[0_25px_25px_-24px_rgb(0,0,0,0.3)] "
        >
          <div className="w-36 h-36 md:w-52 md:h-52 relative ">
            <Image width="144" height="144" alt="mobile" src={pro.img} />
          </div>
          <div className="text-gray-500">
            <p> برند: {pro.name}</p>
            <p>دسته بندی :{pro.category}</p>
            <p>قیمت :{pro.price}</p>
            <p>کیفیت :{pro.description}</p>
            <button className="bg-primary text-white px-6 py-1 rounded-full">
              بیشتر...
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ListProducts;
