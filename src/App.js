// App.js
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
// import Kepler22b from "./pages/Kepler22b";
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (location.action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location.action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page Title";
        metaDescription = "Description for home page";
        break;
      case "/features":
        title = "Features Page Title";
        metaDescription = "Description for features page";
        break;

      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  );
};

export default App;
