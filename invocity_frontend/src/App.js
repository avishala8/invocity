import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HomeGuest from "./components/HomeGuest";
import Templates from "./components/Templates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FAQSection from "./components/FAQSection";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<HomeGuest />} />
                  <Route path="/aboutus" element={<Aboutus />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/FAQs" element={<FAQSection />} />
                  <Route path="/contactus" element={<ContactUs />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
