import React from "react";

export default function Section3() {
  return (
    <section className=" bg-blue-500 text-white pt-60 pb-20 md:pt-20 md:pl-[400px] p-4 md:px-10 mt-40 relative">
      <img
        src="images/fund.png"
        className="w-[320px] h-[400px] object-cover absolute -top-32 left-10 rounded-lg shadow-2xl"
      ></img>
      <h1 className="text-2xl font-bold font-slab placeholder-blue-100 pb-10">
        Funding Has Never Been Easier!
      </h1>
      <p className="text-xl leading-loose tracking-wider">
        Funding has never been easier, At Urgent Bridging Loans we aim to make
        the process as fast and Straight forward as possible so you can get back
        to business!
      </p>
      <a
        href="#form"
        className="inline-block border border-white hover:border-blue-500 hover:bg-white hover:text-blue-500  py-2 px-6 mt-6 rounded"
      >
        Pre-Qualify In 15 Seconds
      </a>
    </section>
  );
}
