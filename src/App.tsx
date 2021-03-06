import { useEffect } from "react";

import { News } from "./components/News";
import { Hero } from "./components/Hero";
import { Client } from "./components/Clients";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Invite } from "./components/Invite";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./components/AboutUs";
import { Courses } from "./components/Courses";
import { Category } from "./components/Category";
import { InfoCards } from "./layout/InfoCards";

import AOS from "aos";

import "./styles/global.scss";
import "./assets/lib/bulma.min.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <InfoCards />
      <Client />
      <AboutUs />
      <Category />
      <Courses />
      <News />
      <Invite />
      <Footer />
    </>
  );
}

export default App;
