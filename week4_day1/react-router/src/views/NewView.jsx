import React from "react";
import { Outlet } from "react-router-dom";

export const NewView = () => {
  return (
    <>
      <h1>NewView</h1>
      <Outlet />
    </>
  );
};

export default NewView;
