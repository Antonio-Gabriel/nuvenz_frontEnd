import { Header } from "./layout/Header";
import { Navbar } from "./components/Navbar";

import "./styles/global.scss";
import "./assets/lib/bulma.min.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
    </>
  );
}

export default App;
