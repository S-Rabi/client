import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./components/main/main.css";
import Dessert from "./components/main/dessert";
import Beverages from "./components/main/beverages";
import Roasting from "./components/main/roasting";
import Contact from "./components/main/contact";
import Home from "./components/home/Home";
import ReservationForm from "./components/main/reservationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/reservationForm" element={<ReservationForm />} />
          <Route exact path="/dessert" element={<Dessert />} />
          <Route exact path="/bevrages" element={<Beverages />} />
          <Route exact path="/roasting" element={<Roasting />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
