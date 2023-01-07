import { useState } from "react";
import About from "./components/about";
import Beneficts from "./components/beneficts";
import Classes from "./components/classes";
import Contact from "./components/contact";
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
    <div className="app bg-gray-20">
      <Navbar currentPage={currentPage} handleSetPage={handleSetPage} />
      <Hero currentPage={currentPage} handleSetPage={handleSetPage} />
      <Beneficts currentPage={currentPage} />
      <Classes currentPage={currentPage} />
      <About currentPage={currentPage} />
      <Contact currentPage={currentPage} />
    </div>
  );
}

export default App;
