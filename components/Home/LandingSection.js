import React from "react";
import Header from "./Header";

export default function LandingSection() {
  return (
    <section className="w-full h-[80vh] md:h-screen bg-gradient-to-br to-purple-600 to from-blue-600 text-white rounded-br-[300px]">
      <Header />
      <div className="flex justify-around items-center p-6">
        <section className=" space-y-8 md:w-1/2 ">
          <h1 className="text-3xl md:text-6xl font-bold leading-snug tracking-wider font-slab pt-4 lg:pt-16 ">
            24 Hour Urgent Business Funding
          </h1>
          <p className=" tracking-wide md:text-xl">
            Pre-qualify for up to 5 Million by tomorrow! Urgent property
            settlement? Gap in cashflow? Deal of a lifetime? don’t let the banks
            hold you up!
          </p>
          <a
            href="#form"
            className="bg-sky-400 py-2 px-6 mt-6 rounded inline-block"
          >
            Pre-Qualify In 15 Seconds
          </a>
        </section>
        <img
          className="hidden md:block w-[350px] h-[450px] object-cover rounded"
          src="images/l.jpg"
        />
      </div>
    </section>
  );
}
