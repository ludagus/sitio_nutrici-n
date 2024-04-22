"use client"

import Image from 'next/image';
import Login from './components/Login';

export default function Page() {
  return (
    <main className="flex justify-center flex-col p-3 " style={{backgroundImage: "url('/fondo.png')"}}>
      <div className="flex shrink-0 items-end rounded-lg  bg-orange-400 md:h-30">
        <Image src="/logoNutri.png" alt='Logo Tu Nutrición' width={200} height={200}></Image>
      </div>
      <div>
        <div>
          <Login />
        </div>
      </div>
    </main>
  );
}