import { useState } from "react";
import About from "./components/about";
import Benefits from "./components/benefits";
import Classes from "./components/classes";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

import { Pages } from "./types.d";

interface AppState {
  currentPage: Pages;
}

function App() {
  const [currentPage, setCurrentPage] = useState<AppState["currentPage"]>(
    Pages.Home
  );

  const handleSetPage = (selectedPage: Pages): void => {
    setCurrentPage(() => selectedPage);
  };
  return (
    <>
      <Navbar currentPage={currentPage} handleSetPage={handleSetPage} />
      <main className="app bg-gray-20">
        <Hero handleSetPage={handleSetPage} />
        <Benefits handleSetPage={handleSetPage} />
        <Classes handleSetPage={handleSetPage} />
        <Contact handleSetPage={handleSetPage} />
      </main>
      <Footer />
    </>
  );
}

export default App;
