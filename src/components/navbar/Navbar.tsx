import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "10vh" }}>
      <ul>
        <li className="flex justify-end">
          <button
            onClick={() => navigate("/")}
            className="m-4 transition duration-1000 hover:scale-125"
          >
            <Typography variant="h5">Home</Typography>
          </button>
          <button
            onClick={() => navigate("/gallery")}
            className="m-4 transition duration-1000 hover:scale-125"
          >
            <Typography variant="h5">Gallery</Typography>
          </button>
        </li>
      </ul>
    </div>
  );
};
