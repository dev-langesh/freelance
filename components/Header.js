import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { open } from "../src/features/sidebarSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between p-4">
      <h1 className="text-2xl font-bold font-slab">TheWorkPlace</h1>
      <IconButton sx={{ color: "white" }} onClick={() => dispatch(open())}>
        <MenuIcon />
      </IconButton>
    </header>
  );
}
