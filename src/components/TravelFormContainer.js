import React, { useState } from "react";
import "./TravelFormContainer.css";

const TravelFormContainer = () => {
  const [travelSpeed, setTravelSpeed] = useState(60); // Initial travel speed
  const [travelTime, setTravelTime] = useState(7); // Initial travel time

  const handleOptionClick = (speed, time) => {
    setTravelSpeed(speed);
    setTravelTime(time);
  };

  return (
    <>
      <div className="vector-group">
        <img className="group-inner" alt="" src="/rectangle-11.svg" />
        <b className="want-to-travel">Want to travel there?</b>
        <div className="rectangle-div" />
        <div className="group-child1" />
        <div className="group-child2" />
        <div className="group-child3" />
        <div className="travel-speed-parent">
          <div className="travel-speed">Travel speed</div>
          <div className="div">{travelSpeed}</div>
          <div className="miles-per-hour">Miles per hour</div>
        </div>
        <div className="travel-time-parent">
          <div className="travel-speed">Travel Time</div>
          <div className="div1">{travelTime}</div>
          <div className="billion-years">Billion years</div>
        </div>
        <img
          className="image-11-icon"
          alt=""
          src="/image-11@2x.png"
          onClick={() => handleOptionClick(60, 7)}
        />
        <img
          className="image-8-icon"
          alt=""
          src="/image-8@2x.png"
          onClick={() => handleOptionClick(85, 6)}
        />
        <img
          className="image-10-icon"
          alt=""
          src="/image-10@2x.png"
          onClick={() => handleOptionClick(58, 5)}
        />
        <img
          className="image-12-icon"
          alt=""
          src="/image-12@2x.png"
          onClick={() => handleOptionClick(67, 7)}
        />
        <div className="bullet-train">Bullet Train</div>
        <div className="car">Car</div>
        <div className="jet">Jet</div>
        <div className="light-speed">
          <p className="light-speed1">Light Speed</p>
        </div>
      </div>
    </>
  );
};

export default TravelFormContainer;
