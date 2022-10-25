import {BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Details from "./pages/Details";
import Favoris from "./pages/Favoris";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/Favoris" element={<Favoris />}/>
        <Route path="/Details/:id" element={<Details />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
