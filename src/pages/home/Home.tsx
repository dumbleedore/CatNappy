
import React from "react";
import { useNavigate } from "react-router-dom";
import catLogo from "../../static/images/catLogo.png";
import styles from "./home.module.css";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <img src={catLogo} alt="catLogo" />
      </div>
      <div className="flex justify-center">
        <h1 className={styles.title} >
          CatNappy
        </h1>
      </div>
      <div className="flex justify-center">
        <h2 className={styles.desc}>
          Find your favorite cat on Cat Nap
        </h2>
      </div>
      <div className="flex justify-center mt-5 ">
      <button onClick={() => navigate("/menu")} className="hover transition duration-1000 hover:scale-125 hover:scale-125 text-white bg-black rounded p-6 text-4xl">Start</button>
        </div>
    </div>
  ); 
}
