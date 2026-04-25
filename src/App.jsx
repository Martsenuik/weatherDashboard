import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { ShortForecast } from "./components/weatherForecast/ShortForecast";
//
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShortForecast />
      {/*  */}
      <Footer />
    </>
  );
}

export default App;
