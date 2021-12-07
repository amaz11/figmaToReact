import './App.css';
import React from "react";
import {
  Footer,
  Blog,
  Posibility,
  Features,
  WhatGTP3,
  Header,
} from "./container";
import { Cta, Brand, Navbar } from "./components";


function App() {
  return (
    <div className="App">
      <div className="gradiant-bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatGTP3/>
      <Features/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
