import React from 'react';

function Register() {
  return (
    <section className=" flex flex-col items-center ">
      <h1 className="">فرم ثبت نام</h1>
      <form action="" className="flex flex-col w-96 gap-4 p-4">
        <input
          type="text"
          placeholder="نام کاربری"
          required
          className="p-4 text-center bg-gray-200 outline-none "
        />
        <input
          type="email"
          required
          placeholder="ایمیل"
          className="p-4 text-center bg-gray-200 outline-none "
        />
        <input
          type="password"
          required
          placeholder="پسورد"
          className="p-4 text-center bg-gray-200 outline-none "
        />
        <button className="bg-primary text-white p-4">ثبت نام</button>
      </form>
    </section>
  );
}

export default Register;
