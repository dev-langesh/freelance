import React from "react";
import { Button, Divider } from "@mui/material";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import GroupsIcon from "@mui/icons-material/Groups";
import AddIcon from "@mui/icons-material/Add";

export default function FlexibleTerms() {
  return (
    <div className="p-6 space-y-10 flex flex-col-reverse md:flex-row-reverse items-center justify-between">
      <section className="w-full md:w-[400px] lg:w-1/2 pt-5">
        <h1 className="text-2xl font-bold font-slab py-6 text-gray-600 ">
          Flexible Terms
        </h1>
        <p className="text-slate-500 leading-loose text-xl ">
          Urgent Bridging Loans provides there clients with the most flexible
          short term bridging loans on the market. In a position to pay it off
          early? We will rebate interest! Need an extra month? Extend the loan
          term for as long as you need by making monthly interest repayments!
          All of these options have no extra costs!
        </p>

        <div className="flex py-6 space-x-10">
          <div>
            <AlarmOnIcon className="text-blue-600 text-4xl" />
            <h2 className="py-4 text-xl font-slab">Borrow On Your Terms</h2>
          </div>

          <div>
            <GroupsIcon className="text-blue-600 text-4xl" />
            <h2 className="py-4 text-xl font-slab">We Are Here To Help</h2>
          </div>
        </div>
        <Button variant="outlined">Check Pricing</Button>
      </section>

      <section className="relative space-y-10">
        <img
          src="https://i0.wp.com/urgentbridgingloans.com.au/wp-content/uploads/2020/07/affordable-pricing.jpg?fit=640%2C720&ssl=1"
          className="rounded-xl"
        />
        <div className="p-4 text-white bg-blue-500 rounded shadow-black/30 shadow-lg md:absolute -top-32 left-52 w-[400px] mx-auto">
          <AddIcon className="rounded-full text-3xl text-white " />

          <h1 className="font-bold text-xl py-4 ">Anything You Need</h1>
          <p>
            This is a short description elaborating the service you have
            mentioned above.​​
          </p>
        </div>
      </section>
    </div>
  );
}
