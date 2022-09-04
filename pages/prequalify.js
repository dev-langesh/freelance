import { Link } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function prequalify() {
  const router = useRouter();

  const { qualified, netbr } = router.query;

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-10 w-11/12 md:w-[400px] text-white rounded-lg space-y-4 flex flex-col items-center">
        <h1 className="text-center font-slab font-bold text-3xl tracking-wider">
          {qualified ? "Congrats!" : "Sorry"}
        </h1>
        <p className="text-xl tracking-wider">
          {qualified ? "You are Qualified" : "You are not Qualified"}
        </p>
        <p className="text-center text-xl font-bold font-slab">
          Netbr : {netbr}
        </p>
        <button
          onClick={() => router.push("/#form")}
          className="px-6 py-2 mt-2 border border-white text-white rounded hover:text-blue-500 hover:bg-white"
        >
          Back
        </button>
      </div>
    </section>
  );
}
