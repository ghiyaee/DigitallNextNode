'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function Home() {
  const [res, setRes] = useState('loading...');
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000')
        .then((res) => res.json())
        .then((res) => setRes(res.msg));
    }, 1000);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{res}</div>
    </main>
  );
}
