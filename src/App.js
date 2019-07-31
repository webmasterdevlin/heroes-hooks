import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import HeaderNav from "./shared/components/HeaderNav";

function App() {
  return (
    <BrowserRouter>
      <>
        <HeaderNav />
        <Router />
      </>
    </BrowserRouter>
  );
}

export default App;
