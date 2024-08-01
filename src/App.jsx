import { useState } from "react";
import "../src/sass/main.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Product from "./components/products/Product";
import Clean from "./components/clean/Clean";
import Coment from "./components/coment/Coment";
import Popular from "./components/popular/Popular";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Clean />
      <Coment />
      <Popular />
      <Footer />
    </>
  );
}

export default App;
