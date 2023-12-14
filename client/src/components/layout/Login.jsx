import Link from 'next/link';
import React from 'react';
import User from '@/models/User';
import dbConnect from '@/dbConnect';
import { redirect } from 'next/navigation';
function Login() {
  async function handelLogin(data) {
    'use server';
    let email = data.get('email')?.valueOf();
    try {
      dbConnect();
      const user = await User.findOne({ email: email });
      if (user === email) {
       redirect('/dashboard');
     }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className=" flex flex-col items-center ">
      <h1 className="">فرم ورود</h1>
      <form action={handelLogin} className="flex flex-col w-96 gap-4 p-4">
        <input
          type="email"
          required
          placeholder="ایمیل"
          className="p-4 text-center bg-gray-200 outline-none "
          name="email"
        />
        <input
          type="password"
          required
          placeholder="پسورد"
          className="p-4 text-center bg-gray-200 outline-none "
        />
        <button className="bg-primary text-white p-4">ورود</button>
      </form>
      <p>
        ثبت نام نکردید؟{' '}
        <Link href={'/register'} className="text-blue-500">
          اینجا کلیک کنید
        </Link>
      </p>
    </section>
  );
}

export default Login;
