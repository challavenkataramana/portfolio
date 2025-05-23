"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyServices from "./components/MyServices";
import Navbar from "./components/Navbar";
import Work from "./components/Work";


export default function Home() {

  return (
     <>
      <Navbar />
      <Header/>
      <About />
      <MyServices/>
      <Work  />
      <Contact/>
      <Footer />
    </>
  );
}
