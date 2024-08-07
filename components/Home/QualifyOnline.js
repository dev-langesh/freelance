import React from "react";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ClassIcon from "@mui/icons-material/Class";
import { Button, Divider } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function QualifyOnline() {
  return (
    <div className="p-6 space-y-10 flex flex-col md:flex-row items-center justify-between">
      <section className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold font-slab py-6 text-gray-600 ">
          Qualify Online In Seconds
        </h1>
        <p className="text-slate-500 leading-loose text-xl ">
          All it takes is 15 seconds to know how much we can lend you! From
          there you can speak to a lending specialist or request a Letter Of
          Offer!
        </p>

        <div className="flex py-6 space-x-10">
          <div>
            <ViewInArIcon sx={{ fontSize: "44px" }} className="text-blue-600" />
            <h2 className="py-4 text-xl font-slab">Flexible Terms</h2>
          </div>

          <div>
            <ClassIcon sx={{ fontSize: "44px" }} className="text-blue-600" />
            <h2 className="py-4 text-xl font-slab">
              Capitalised & Interest Only
            </h2>
          </div>
        </div>
        <Button variant="outlined">Learn More</Button>
      </section>

      <section className="relative space-y-10 p-4">
        <img
          src="images/image.png"
          className="rounded-xl w-[400px] h-[500px]"
        />
        <div className="p-4 text-white bg-blue-500 rounded shadow-black/30 shadow-lg md:absolute bottom-10 right-56 w-full md:w-[400px] mx-auto">
          <BusinessCenterIcon className="rounded-full text-3xl text-white " />

          <h1 className="font-bold text-xl py-4 ">Friendly Price Package</h1>
          <p>
            This is a short description elaborating the service you have
            mentioned above.​​
          </p>
        </div>
      </section>
    </div>
  );
}
