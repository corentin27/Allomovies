import {BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Details from "./pages/Details";
import Favoris from "./pages/Favoris";
import {Provider} from "react-redux";
import { store } from "./redux"


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Accueil/>}/>
                  <Route path="/Favoris" element={<Favoris />}/>
                  <Route path="/Details/:id" element={<Details />}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
