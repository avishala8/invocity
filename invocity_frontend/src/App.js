import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HomeGuest from "./components/HomeGuest";
import Templates from "./components/Templates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/FAQs" element={<FAQSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
