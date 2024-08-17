/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import Sales from "./Sales";
import Page from "./Page";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("");
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!appState.login) {
      navigate("/login");
      appDispatch({
        type: "flashMessage",
        value: "Login to Continue",
      });
    } else {
      const ourRequest = Axios.CancelToken.source();
      async function fetchResult() {
        try {
          const response = await Axios.post(
            "/checkToken",
            { token: appState.user.token },
            { cancelToken: ourRequest.token }
          );
          if (!response.data) {
            appDispatch({ type: "logout" });
            appDispatch({
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

  const renderContent = () => {
    switch (activeItem) {
      case "Sales":
        return <Sales />;
      case "Purchases":
        return <Sales />;
      case "Quotations":
        return <Sales />;
      case "Expenses+":
        return <Sales />;
      case "Products & Services":
        return <Sales />;
      case "Inventory":
        return <Sales />;
      case "Payments":
        return <Sales />;
      case "Customers":
        return <Sales />;
      case "Vendors":
        return <Sales />;
      case "Insights":
        return <Sales />;
      case "Reports":
        return <Sales />;
      case "E-way Bills":
        return <Sales />;
      case "Online Store":
        return <Sales />;
      case "My Drive":
        return <Sales />;
      case "Settings":
        return <h1>Settings page </h1>;
      case "Tutorials":
        return <Sales />;
      case "Feedback":
        return <Sales />;
      default:
        return (
          <div className="dashboard">
            <div className="main-content">
              <header className="header">
                <h1>Hello, {appState.user.username}</h1>
              </header>
              <div className="widgets">
                <div className="widget">
                  <h2>Widget 1</h2>
                  <p>Content for widget 1</p>
                </div>
                <div className="widget">
                  <h2>Widget 2</h2>
                  <p>Content for widget 2</p>
                </div>
                <div className="widget">
                  <h2>Widget 3</h2>
                  <p>Content for widget 3</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  return (
    <Page title="Dashboard">
      <div className="dashboard">
        <hr />
        <Sidebar setActiveItem={setActiveItem} />
        <div className="main-content-area">{renderContent()}</div>
      </div>
    </Page>
  );
};

export default Dashboard;
