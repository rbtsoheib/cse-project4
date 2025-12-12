"use client";
import { useState } from "react";

export default function Home() {
  const [OnHover, setOnHover] = useState(false);

  return (
    <>
      <div
        onClick={() => setOnHover(true)}
        onMouseEnter={() => {
          setOnHover(false);
        }}
        className={` w-64 h-40 flex items-center justify-center rounded-xl 
          
            
            ${
              OnHover
                ? "bg-blue-700 scale-110 text-white transiton-transform duration-300 ease-in-out "
                : " bg-white-200 text-black transition-transform duration-300 ease-in-out "
            } 

          `}
      >
        hover this square
      </div>
    </>
  );
}
