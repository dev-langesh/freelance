import React from "react";

export default function Gallery() {
  return (
    <section className="pt-10 p-6 md:space-x-10 flex flex-wrap items-center justify-center">
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="images/2.png"
      />
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="images/4.png"
      />
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="images/5.png"
      />
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="images/l.jpg"
      />
      
      <img
        className="w-full mt-10  rounded-md shadow-lg object-cover md:w-[300px] h-[300px] "
        src="images/6.png"
      />
    </section>
  );
}
