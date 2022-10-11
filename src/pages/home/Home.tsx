import { Typography } from "@mui/material";
import React from "react";
import catLogo from "../../static/images/catLogo.png";
import style from "./home.module.css";
export const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={catLogo} alt="catLogo" />
      </div>
      <div className="flex justify-center">
        <Typography className={style.title} variant="h2">
          CatNappy
        </Typography>
      </div>
      <div className="flex justify-center">
        <Typography className={style.desc} variant="h6">
          Find your favorite cat on Cat Nap
        </Typography>
      </div>
    </div>
  );
};
