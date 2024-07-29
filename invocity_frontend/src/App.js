/* eslint-disable default-case */
import React, { Suspense } from "react";
import { useImmerReducer } from "use-immer";
import "./App.css";
import Axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HomeGuest from "./components/HomeGuest";
import Templates from "./components/Templates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Terms from "./components/Terms";
import FAQSection from "./components/FAQSection";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import LoadingDots from "./components/LoadingDots";
import FlashMessages from "./components/FlashMessages";
import StateContext from "./components/StateContext";
import DispatchContext from "./components/DispatchContext";
Axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:8080";

function App() {
  const initialState = {
    successMsg: Boolean(true),
    flashMessages: [],
  };
  function ourReducer(draft, action) {
    switch (action.type) {
      case "success":
        draft.successMsg = action.value;
        return;
      case "flashMessage":
        draft.flashMessages.push(action.value);
        return;
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages message={state.flashMessages} />
          <Suspense fallback={<LoadingDots />}>
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />

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
                        <Route path="/terms" element={<Terms />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
