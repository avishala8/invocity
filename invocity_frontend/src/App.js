/* eslint-disable default-case */
import React, { Suspense, useEffect } from "react";
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
import Dashboard from "./components/Dashboard";
Axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:8080";

function App() {
  const initialState = {
    login: Boolean(localStorage.getItem("appToken")),
    user: {
      token: localStorage.getItem("appToken"),
      phoneNumber: localStorage.getItem("appPhoneNumber"),
    },
    // successMsg: Boolean(true),
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
      case "login":
        draft.login = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.login = false;
        return;
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);
  useEffect(() => {
    if (state.login) {
      localStorage.setItem("appToken", state.user.token);
      localStorage.setItem("appPhoneNumber", state.user.username);
    } else {
      localStorage.removeItem("appToken");
      localStorage.removeItem("appPhoneNumber");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.login]);
  //check if token is expired on first render
  useEffect(() => {
    if (state.login) {
      const ourRequest = Axios.CancelToken.source();
      async function fetchResult() {
        try {
          const response = await Axios.post(
            "/checkToken",
            { token: state.user.token },
            { cancelToken: ourRequest.token }
          );
          if (!response.data) {
            dispatch({ type: "logout" });
            dispatch({
              type: "flashMessage",
              value: "The session has expired. Please Login again!",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchResult();
      return () => {
        ourRequest.cancel();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                        <Route
                          path="/"
                          element={state.login ? <Dashboard /> : <HomeGuest />}
                        />
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route path="/templates" element={<Templates />} />
                        <Route path="/FAQs" element={<FAQSection />} />
                        <Route path="/contactus" element={<ContactUs />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/dashboard" element={<Dashboard />} />
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
