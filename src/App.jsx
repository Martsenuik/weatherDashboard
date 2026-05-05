import "./App.css";
import { createContext, useState } from "react";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { ShortForecast } from "./components/weatherForecast/ShortForecast";
import { PetsHighlights } from "./components/PetsHighlights/PetsHighlights";
//
import { Footer } from "./components/footer/Footer";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Header />
      <Hero searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShortForecast searchValue={searchValue} />
      <PetsHighlights />
      {/*  */}
      <Footer />
    </>
  );
}

export default App;
