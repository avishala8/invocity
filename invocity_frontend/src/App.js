import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HomeGuest from "./components/HomeGuest";
import Templates from "./components/Templates";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Header />
      <Aboutus />
      <HomeGuest />
      <Templates />
      <Footer />
    </Router>
  );
}

export default App;
