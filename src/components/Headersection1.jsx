import React from "react";
import "./HeaderSection.css";

const Headersection1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="maindiv">
            <div className="rk-title">
              <b className="rk-kepler-22b">Kepler 22b</b>
              <b className="rk-solar-system-exploration">
                Solar System Exploration
              </b>
            </div>
            {/* <div className="trui">

          </div> */}
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <p className="rk-blocks">Planet Type</p>
                <h3 className="rk-sub-blocks">Super Earth </h3>
              </div>
              <div className="col-md-4 col-sm-6">
                <p className="rk-blocks">Orbital Radius </p>
                <h3 className="rk-sub-blocks">0.812 AU</h3>
              </div>
              <div className="col-md-4 col-sm-6">
                <p className="rk-blocks">Planet Radius</p>
                <h3 className="rk-sub-blocks">2.1 x Earth </h3>
              </div>
              <div className="col-md-4 col-sm-6">
                <p className="rk-blocks">Mass</p>
                <h3 className="rk-sub-blocks">9.1 Earths </h3>
              </div>
              <div className="col-md-4 col-sm-6">
                <p className="rk-blocks">Discovery Date</p>
                <h3 className="rk-sub-blocks">2011 </h3>
              </div>
              <div className="col-md-4 col-sm-6">
                <p className="rk-blocks">Eccentricity</p>
                <h3 className="rk-sub-blocks">0.72 </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          {" "}
          <img className="rk-image-7-icon" alt="" src="/image-7@2x.png" />
        </div>
      </div>{" "}
    </div>
  );
};

export default Headersection1;
