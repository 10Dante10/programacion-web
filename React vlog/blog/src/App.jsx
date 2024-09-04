import React from "react";
import Footer from "./components/Footer";
import { Main2 } from "./components/main";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Main2 />
      <Footer />
      {/* Habilita el siguiente componente para acceder a la página de administración */}
      {/* <Admin /> */}
    </div>
  );
}

export default App;
