import { Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li className="flex justify-end">
          <a
            href="/home"
            className="m-4 transition duration-1000 hover:scale-125"
          >
            <Typography variant="h5">Home</Typography>
          </a>
          <a
            className="m-4 transition duration-1000 hover:scale-125"
            href="/settings"
          >
            <Typography variant="h5">Settings</Typography>
          </a>
        </li>
      </ul>
    </div>
  );
};
