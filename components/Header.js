import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { open } from "../src/features/sidebarSlice";
import Link from "next/link";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between p-4">
      <h1 className="text-2xl font-bold font-slab">TheWorkPlace</h1>
      <div className="md:hidden">
        <IconButton sx={{ color: "white" }} onClick={() => dispatch(open())}>
          <MenuIcon />
        </IconButton>
      </div>
      <nav className="hidden md:flex space-x-6 text-xl">
        <Link href="/home">
          <a className="hover:tracking-widest  transition-all duration-300">
            Home
          </a>
        </Link>
        <Link href="/amenties">
          <a className="hover:tracking-widest transition-all duration-300">
            Amenities
          </a>
        </Link>
        <Link href="/pricing">
          <a className="hover:tracking-widest transition-all duration-300">
            Pricing
          </a>
        </Link>
        <Link href="/contact">
          <a className="hover:tracking-widest transition-all duration-300">
            Conatct
          </a>
        </Link>
        <Link href="/about">
          <a className="hover:tracking-widest transition-all duration-300">
            About us
          </a>
        </Link>
      </nav>
    </header>
  );
}
