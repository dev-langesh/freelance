import React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <section className="text-white bg-blue-500 p-4 space-y-5 flex flex-col md:flex-row md:justify-around md:items-start md:space-y-0 md:py-10">
        <div className="space-y-2 md:w-[300px]">
          <h1 className="text-xl font-slab font-bold">TheWorkPlace</h1>
          <p>
            Donec Sodales Sagittis Magna. SedConsequat, Leo Eget Bibendum
            Sodales, Augue Velit Cursus Nunc, Quis Gravida Libero.
          </p>
        </div>

        <div className="space-y-2 flex flex-col">
          <h1 className="text-xl font-slab font-bold">Quick Links</h1>
          <Link href="/home">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/amenities">
            <a>Amenities</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>

        <div className="space-y-2 flex flex-col">
          <h1 className="text-xl font-slab font-bold">Important Links</h1>
          <Link href="/home">
            <a>Terms and Conditions</a>
          </Link>
          <Link href="/about">
            <a>Legal</a>
          </Link>
          <Link href="/amenities">
            <a>Business</a>
          </Link>
          <Link href="/contact">
            <a>Partners</a>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold font-slab ">Let&apos;s Connect</h1>
          <p className="md:w-[300px]">
            Connect with entrepreneurs, build your network, make great business.
          </p>
          <IconButton className="text-white">
            <FacebookIcon />
          </IconButton>
          <IconButton className="text-white">
            <InstagramIcon />
          </IconButton>
          <IconButton className="text-white">
            <MailIcon />
          </IconButton>
          <IconButton className="text-white">
            <LinkedInIcon />
          </IconButton>
        </div>
      </section>
      <div className="mt-[1px] p-6 flex flex-col md:flex-row md:space-y-0 space-y-6 justify-between items-center bg-blue-500 text-white">
        <p>Copyright 2022 Urgent Bridging Loans</p>
        <p>Powered by Urgent Bridging Loans</p>
      </div>
    </>
  );
}
