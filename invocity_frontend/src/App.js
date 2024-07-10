import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomeGuest from "./components/HomeGuest";
import Aboutus from "./components/Aboutus";
import Template from "./components/Templates";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/templates" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
