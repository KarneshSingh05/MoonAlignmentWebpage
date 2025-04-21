import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./src/assets/Header";
import { Body } from "./src/assets/Body";
import { Footer } from "./src/assets/Footer";

const Applayout = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>);
