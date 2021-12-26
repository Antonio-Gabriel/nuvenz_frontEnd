import { Hero } from "./components/Hero";
import { Client } from "./components/Clients";
import { Header } from "./layout/Header";
import { Navbar } from "./components/Navbar";
import { InfoCards } from "./layout/InfoCards";

import "./styles/global.scss";
import "./assets/lib/bulma.min.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <InfoCards />
      <Client />
    </>
  );
}

export default App;
