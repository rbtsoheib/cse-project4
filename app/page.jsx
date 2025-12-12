"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const testRouter = useRouter();

  function goToAbout() {
    testRouter.push("/About");
  }

  return (
    <>
      <h2 className="text-red font-xl"> click down to go to About page</h2>
      <button onClick={testRouter}> HERE </button>
    </>
  );
}





// import { useState } from "react";

// export default function page() {


//   return (
//     <>
    
//     </>
//   );
// }


  // const [OnHover, setOnHover] = useState(false);

  // <div
  //       onMouseEnter={() => setOnHover(true)}
  //       onMouseLeave={() => {
  //         setOnHover(false);
  //       }}
  //       className={` w-64 h-40 flex items-center justify-center rounded-xl text-black bg-blue-500 
          
            
  //           ${
  //             OnHover
  //               ? "bg-red-700 scale-110 text-black transiton-transform duration-300 ease-in-out rotate-90 translate-x-14"
  //               : " bg-black-200 text-red transition-transform duration-300 ease-in-out "
  //           } 

  //         `}
  //     >
  //       hover this square
  //     </div>