import React from "react";
import { Button } from "@mui/material";

export default function FundingNeeds() {
  return (
    <section className="text-center px-4 py-10 space-y-8 sm:p-10 md:w-3/4 md:mx-auto ">
      <h1 className="text-2xl font-bold font-slab text-center tracking-wide text-gray-700">
        One Stop For Your Urgent Funding Needs
      </h1>
      <p className="text-slate-500 text-[18px] tracking-wide leading-relaxed">
        Speed of service is what we pride ourselves on. Our product is designed
        for when you need to settle by tomorrow. Get up to $5,000,000.00 In your
        account the next business day. All you need to pre qualify is enough
        equity in real-estate and a business purpose for the loan.
      </p>
      <button className="bg-blue-500 text-white text-semibold  py-2 px-6 mt-6 rounded shadow-lg">
        Pre-Qualify In 15 Seconds
      </button>
    </section>
  );
}
