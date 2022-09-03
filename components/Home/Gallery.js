import React from "react";

export default function Gallery() {
  return (
    <section className="pt-10 p-6 space-y-10 md:space-x-10 flex flex-wrap items-center justify-center">
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="https://i0.wp.com/urgentbridgingloans.com.au/wp-content/uploads/2020/07/gallery-1.jpg?fit=427%2C427&ssl=1"
      />
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="https://i0.wp.com/urgentbridgingloans.com.au/wp-content/uploads/2020/07/gallery-2.jpg?fit=427%2C427&ssl=1"
      />
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="https://i0.wp.com/urgentbridgingloans.com.au/wp-content/uploads/2020/06/gallery3-free-img.jpg?w=250&ssl=1"
      />
      <img
        className="w-full rounded-md shadow-lg  object-cover md:w-[300px] h-[300px] "
        src="https://i0.wp.com/urgentbridgingloans.com.au/wp-content/uploads/2020/06/gallery4-free-img.jpg?w=250&ssl=1"
      />
      <img
        className="w-full  rounded-md shadow-lg object-cover md:w-[300px] h-[300px] "
        src="https://i0.wp.com/urgentbridgingloans.com.au/wp-content/uploads/2020/06/left-free-img.jpg?w=270&ssl=1"
      />
    </section>
  );
}
