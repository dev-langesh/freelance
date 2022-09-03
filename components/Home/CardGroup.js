import React from "react";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import GroupsIcon from "@mui/icons-material/Groups";
import GamesIcon from "@mui/icons-material/Games";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function CardGroup() {
  return (
    <section className="p-2 sm:p-6 flex flex-wrap  items-center justify-center">
      <div className="p-6 m-2 space-y-3 w-11/12 sm:w-[400px] shadow-pink-300/40 shadow-lg rounded-lg col-span-12 md:col-span-4">
        <AlarmOnIcon sx={{ color: "gray" }} />
        <h2 className="text-xl tracking-wider font-bold font-slab text-slate-700">
          Speedy Service
        </h2>
        <p className=" text-slate-500">
          Our team will aim to action your enquiry within 5 minutes and get you
          a conditional offer within an hour!
        </p>
      </div>
      <div className="p-6 m-2 space-y-3 w-11/12 sm:w-[400px] shadow-pink-300/40 shadow-lg rounded-lg col-span-12 md:col-span-4">
        <GroupsIcon sx={{ color: "gray" }} />
        <h2 className="text-xl tracking-wider font-bold font-slab text-slate-700">
          Experienced Team
        </h2>
        <p className=" text-slate-500">
          Our team will aim to action your enquiry within 5 minutes and get you
          a conditional offer within an hour!
        </p>
      </div>

      <div className="p-6 m-2 space-y-3 w-11/12 sm:w-[400px] shadow-pink-300/40 shadow-lg rounded-lg col-span-12 md:col-span-4">
        <GamesIcon sx={{ color: "gray" }} />
        <h2 className="text-xl tracking-wider font-bold font-slab text-slate-700">
          Value Based Lender
        </h2>
        <p className=" text-slate-500">
          We are all about speed, honesty and transparency. These three values
          give our clients confidence when they need it most.
        </p>
      </div>

      <div className="p-6 m-2 space-y-3 w-11/12 sm:w-[400px] shadow-pink-300/40 shadow-lg rounded-lg col-span-12 md:col-span-4">
        <PersonPinIcon sx={{ color: "gray" }} />
        <h2 className="text-xl tracking-wider font-bold font-slab text-slate-700">
          No Valuations
        </h2>
        <p className=" text-slate-500">
          We dont do valuations! This allows us to fund you fast.
        </p>
      </div>

      <div className="p-6 m-2 space-y-3 w-11/12 sm:w-[400px] shadow-pink-300/40 shadow-lg rounded-lg col-span-12 md:col-span-4">
        <CreditCardIcon sx={{ color: "gray" }} />
        <h2 className="text-xl tracking-wider font-bold font-slab text-slate-700">
          Bad Credit?
        </h2>
        <p className=" text-slate-500">
          Since we are securing against real estate your credit is no issue!
        </p>
      </div>
    </section>
  );
}
