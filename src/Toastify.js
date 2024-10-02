import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const handleToastify = () => {
    toast("ad new task here");
  };
  return (
    <div>
      <h1>practice toastify</h1>
      <button onClick={handleToastify}>new task</button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
