import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navWithAuthObj } from "./navigateObj";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../src/features/sidebarSlice";
import { useRouter } from "next/router";

export default function SideNav() {
  const state = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  const [navObj, setNavObj] = useState(navWithAuthObj);
  const router = useRouter();

  function closeSideBar() {
    dispatch(close());
  }

  return (
    <aside
      className={`absolute top-0 left-0 transform ${
        state === "open" ? "translate-x-0" : "-translate-x-[250px]"
      } w-[250px] bg-white shadow shadow-indigo-200 h-screen flex flex-col transition duration-200  z-50`}
    >
      <Link href="/">
        <a
          onClick={closeSideBar}
          className="pl-3 text-xl font-slab font-semibold text-indigo-500 tracking-wider py-5"
        >
          TheWorkPlace
        </a>
      </Link>
      <nav className="flex flex-col space-y-1 flex-1">
        <>
          {navObj.map((item) => {
            return (
              <Navigate
                close={closeSideBar}
                key={item.key}
                href={item.href}
                title={item.title}
              />
            );
          })}
        </>
      </nav>

      <footer>
        <button
          onClick={closeSideBar}
          className="py-3 text-center w-full bg-indigo-100 hover:bg-indigo-600 hover:text-white text-indigo-600 transition-all duration-300 "
        >
          Close
        </button>
      </footer>
    </aside>
  );
}

function Navigate({ href, title, close }) {
  return (
    <Link href={`${href}`}>
      <a
        onClick={close}
        className="block hover:bg-indigo-50 hover:text-indigo-600 p-3 hover:tracking-widest hover:border-r-4 border-indigo-400 transition-all duration-150"
      >
        {title}
      </a>
    </Link>
  );
}
