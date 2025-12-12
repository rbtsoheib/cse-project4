"use client";
import { useState } from "react";

export default function Home() {
  const [OnHover, setOnHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => {
          setOnHover(false);
        }}
        className={` w-64 h-40 flex items-center justify-center rounded-xl text-white 
          
            
            ${
              OnHover
                ? "bg-red-700 scale-110 text-black transiton-transform duration-300 ease-in-out rotate-90 translate-x-14"
                : " bg-white-200 text-black transition-transform duration-300 ease-in-out "
            } 

          `}
      >
        hover this square
      </div>
    </>
  );
}
