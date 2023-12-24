import React from 'react';
import User from '@/models/User';
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
const saltRounds = 10;
function Register() {
  async function handelRegister(data) {
    'use server';
    const name = data.get('userName').valueOf();
    const email = data.get('email').valueOf();
    const password=data.get('password').valueOf()
    bcrypt.hash(password, saltRounds,async (err,password) => {
      if (err) {
        console.log(err);
      } else {
        const newUser = new User({ name, email, password:password })
        await newUser.save()
      }
    });
    
    redirect('/login')
  }

  return (
    <section className=" flex flex-col items-center mt-10">
      <h1 className="">فرم ثبت نام</h1>
      <form action={handelRegister} className="flex flex-col w-96 gap-4 p-4">
        <input
          type="text"
          name="userName"
          placeholder="نام کاربری"
          required
          className="p-4 text-center bg-gray-200 outline-none "
        />
        <input
          type="email"
          name="email"
          required
          placeholder="ایمیل"
          className="p-4 text-center bg-gray-200 outline-none "
        />
        <input
          type="password"
          name="password"
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
