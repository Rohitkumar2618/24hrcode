import { Link } from "react-router-dom";
import "./WelcomeContainer.css";
import Navbar from "./Navbar";
import Headersection1 from "./Headersection1"

const WelcomeContainer = () => {
  return (
    <div className="">
      <Navbar />
      <Headersection1/>
    </div>
  );
};

export default WelcomeContainer;
