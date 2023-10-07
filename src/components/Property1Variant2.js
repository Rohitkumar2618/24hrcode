import { useMemo } from "react";
import WelcomeContainer from "./WelcomeContainer";
import TravelFormContainer from "./TravelFormContainer";
import "./Property1Variant2.css";

const Property1Variant2 = ({
  group7,
  group3,
  propTop,
  propTop1,
  propLeft,
  propWidth,
  propHeight,
  propTop2,
  propLeft1,
  propWidth1,
  propHeight1,
  propTop3,
  propLeft2,
  propWidth2,
  propHeight2,
  propTop4,
  propLeft3,
  propWidth3,
  propHeight3,
  propTop5,
  propLeft4,
  propWidth4,
  propHeight4,
  propLeft5,
  propLeft6,
  propWidth5,
  propHeight5,
  propTop6,
  propLeft7,
  propWidth6,
  propHeight6,
  propTop7,
  propLeft8,
  propWidth7,
  propHeight7,
  propTop8,
  propLeft9,
  propWidth8,
  propHeight8,
  propLeft10,
  propWidth9,
  propHeight9,
  propTop9,
  propLeft11,
  propHeight10,
  propTop10,
  propLeft12,
  propWidth10,
  propHeight11,
  propTop11,
  propLeft13,
  propWidth11,
  propHeight12,
  propTop12,
  propLeft14,
  propWidth12,
  propHeight13,
  propTop13,
  propLeft15,
  propWidth13,
  propHeight14,
  propTop14,
  propLeft16,
  propWidth14,
  propHeight15,
  propTop15,
  propLeft17,
  propWidth15,
  propHeight16,
  propTop16,
  propLeft18,
  propWidth16,
  propHeight17,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const vectorIconStyle = useMemo(() => {
    return {
      top: propTop1,
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propTop1, propLeft, propWidth, propHeight]);

  const vectorIcon1Style = useMemo(() => {
    return {
      top: propTop2,
      left: propLeft1,
      width: propWidth1,
      height: propHeight1,
    };
  }, [propTop2, propLeft1, propWidth1, propHeight1]);

  const vectorIcon2Style = useMemo(() => {
    return {
      top: propTop3,
      left: propLeft2,
      width: propWidth2,
      height: propHeight2,
    };
  }, [propTop3, propLeft2, propWidth2, propHeight2]);

  const vectorIcon3Style = useMemo(() => {
    return {
      top: propTop4,
      left: propLeft3,
      width: propWidth3,
      height: propHeight3,
    };
  }, [propTop4, propLeft3, propWidth3, propHeight3]);

  const groupIconStyle = useMemo(() => {
    return {
      top: propTop5,
      left: propLeft4,
      width: propWidth4,
      height: propHeight4,
    };
  }, [propTop5, propLeft4, propWidth4, propHeight4]);

  const lightIconStyle = useMemo(() => {
    return {
      left: propLeft5,
    };
  }, [propLeft5]);

  const image7IconStyle = useMemo(() => {
    return {
      left: propLeft6,
      width: propWidth5,
      height: propHeight5,
    };
  }, [propLeft6, propWidth5, propHeight5]);

  const groupIcon1Style = useMemo(() => {
    return {
      top: propTop6,
      left: propLeft7,
      width: propWidth6,
      height: propHeight6,
    };
  }, [propTop6, propLeft7, propWidth6, propHeight6]);

  const groupIcon2Style = useMemo(() => {
    return {
      top: propTop7,
      left: propLeft8,
      width: propWidth7,
      height: propHeight7,
    };
  }, [propTop7, propLeft8, propWidth7, propHeight7]);

  const lineIconStyle = useMemo(() => {
    return {
      top: propTop8,
      left: propLeft9,
      width: propWidth8,
      height: propHeight8,
    };
  }, [propTop8, propLeft9, propWidth8, propHeight8]);

  const lineIcon1Style = useMemo(() => {
    return {
      left: propLeft10,
      width: propWidth9,
      height: propHeight9,
    };
  }, [propLeft10, propWidth9, propHeight9]);

  const lineIcon2Style = useMemo(() => {
    return {
      top: propTop9,
      left: propLeft11,
      height: propHeight10,
    };
  }, [propTop9, propLeft11, propHeight10]);

  const rectangleIconStyle = useMemo(() => {
    return {
      top: propTop10,
      left: propLeft12,
      width: propWidth10,
      height: propHeight11,
    };
  }, [propTop10, propLeft12, propWidth10, propHeight11]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      top: propTop11,
      left: propLeft13,
      width: propWidth11,
      height: propHeight12,
    };
  }, [propTop11, propLeft13, propWidth11, propHeight12]);

  const groupIcon3Style = useMemo(() => {
    return {
      top: propTop12,
      left: propLeft14,
      width: propWidth12,
      height: propHeight13,
    };
  }, [propTop12, propLeft14, propWidth12, propHeight13]);

  const vectorIcon4Style = useMemo(() => {
    return {
      top: propTop13,
      left: propLeft15,
      width: propWidth13,
      height: propHeight14,
    };
  }, [propTop13, propLeft15, propWidth13, propHeight14]);

  const vectorIcon5Style = useMemo(() => {
    return {
      top: propTop14,
      left: propLeft16,
      width: propWidth14,
      height: propHeight15,
    };
  }, [propTop14, propLeft16, propWidth14, propHeight15]);

  const rectangleIcon2Style = useMemo(() => {
    return {
      top: propTop15,
      left: propLeft17,
      width: propWidth15,
      height: propHeight16,
    };
  }, [propTop15, propLeft17, propWidth15, propHeight16]);

  const rectangleIcon3Style = useMemo(() => {
    return {
      top: propTop16,
      left: propLeft18,
      width: propWidth16,
      height: propHeight17,
    };
  }, [propTop16, propLeft18, propWidth16, propHeight17]);

  return (
    <div className="property-1variant2" style={property1Variant2Style}>
      <div className="a-super-earth">A SUPER EARTH ODYSSEY</div>
      <img
        className="property-1variant2-child"
        alt=""
        src="/vector-1.svg"
        style={vectorIconStyle}
      />
      <img
        className="property-1variant2-item"
        alt=""
        src="/vector-2.svg"
        style={vectorIcon1Style}
      />
      <img
        className="property-1variant2-child"
        alt=""
        src="/vector-3.svg"
        style={vectorIcon2Style}
      />
      <img
        className="vector-icon"
        alt=""
        src="/vector-4.svg"
        style={vectorIcon3Style}
      />
      <img className="group-icon" alt="" src={group7} />
      {/* <div className="title">
        <b className="kepler-22b">Kepler 22b</b>
        <b className="solar-system-exploration">Solar System Exploration</b>
      </div> */}
      <img
        className="property-1variant2-child1"
        alt=""
        src={group3}
        style={groupIconStyle}
      />
      <img
        className="light-icon"
        alt=""
        src="/light@2x.png"
        // style={lightIconStyle}
      />
      {/* <div className="text-block-parent">
        <div className="text-block">
          <div className="mass">MASS</div>
          <div className="earths">9.1 Earths</div>
        </div>
        <div className="text-block1">
          <div className="mass">PLANET TYPE</div>
          <div className="earths">Super Earth</div>
        </div>
        <div className="text-block2">
          <div className="mass">ORBITAL RADIUS</div>
          <div className="au">
            <p className="a-cosmic-marvel">0.812 AU</p>
          </div>
        </div>
        <div className="text-block3">
          <div className="mass">DISCOVERY DATE</div>
          <div className="earths">2011</div>
        </div>
        <div className="text-block4">
          <div className="mass">PLANET RADIUS</div>
          <div className="earths">2.1 x Earth</div>
        </div>
        <div className="text-block5">
          <div className="mass">ECCENTRICITY</div>
          <div className="earths">{`< 0.72`}</div>
        </div>
      </div> */}
      <WelcomeContainer />
      {/* <img
        className="image-7-icon"
        alt=""
        src="/image-7@2x.png"
        style={image7IconStyle}
      /> */}
      <div className="property-1variant2-child2" />
      <img
        className="property-1variant2-child3"
        alt=""
        src="/group-22.svg"
        style={groupIcon1Style}
      />
      <img
        className="property-1variant2-child4"
        alt=""
        src="/group-22.svg"
        style={groupIcon2Style}
      />
      <div className="property-1variant2-child5" />
      <img
        className="line-icon"
        alt=""
        src="/line-2.svg"
        style={lineIconStyle}
      />
      <img
        className="property-1variant2-child6"
        alt=""
        src="/line-4.svg"
        style={lineIcon1Style}
      />
      <img
        className="property-1variant2-child7"
        alt=""
        src="/line-5.svg"
        style={lineIcon2Style}
      />
      <img
        className="rectangle-icon"
        alt=""
        src="/rectangle-6.svg"
        style={rectangleIconStyle}
      />
      <img
        className="property-1variant2-child8"
        alt=""
        src="/rectangle-17.svg"
        style={rectangleIcon1Style}
      />
      <div className="in-the-cosmic">
        In the cosmic ballet of distant worlds, one exoplanet often steals the
        spotlight: Kepler-22b.This distant world, shrouded in the mysteries of
        the universe, dances through the cosmos, inviting us to ponder its
        secrets. With its super-Earth stature and a tantalizing position in the
        habitable zone, Kepler-22b invites us to dream of alien landscapes and
        the potential for life beyond our own pale blue dot.
      </div>
      <div className="a-cosmic-marvel-container">
        <p className="a-cosmic-marvel">
          A cosmic marvel in Cygnus, 600 light-years from Earth. Coordinates:
          19h 16m 52s RA, +47° 53' 3" Dec. An enigmatic world, revealed through
          advanced telescopes.
        </p>
      </div>
      <img
        className="property-1variant2-child9"
        alt=""
        src="/group-22.svg"
        style={groupIcon3Style}
      />
      <div className="kepler-22b-harbors-an">
        Kepler-22b, Harbors an atmosphere shrouded in mystery. Scientists
        speculate about its composition, whether it's predominantly rocky,
        gaseous, or perhaps even liquid. This celestial enigma challenges our
        understanding of exoplanetary atmospheres, leaving us eager to unveil
        its secrets.
      </div>
      <div className="property-1variant2-child10" />
      <img
        className="property-1variant2-child11"
        alt=""
        src="/vector-5.svg"
        style={vectorIcon4Style}
      />
      <img
        className="property-1variant2-child12"
        alt=""
        src="/vector-6.svg"
        style={vectorIcon5Style}
      />
      <img
        className="property-1variant2-child13"
        alt=""
        src="/rectangle-18.svg"
        style={rectangleIcon2Style}
      />
      <b className="exploring-a-super-earth">
        Exploring a Super-Earth Beyond Our Imagination
      </b>
      <b className="a-cosmic-gem">A Cosmic Gem in the Cygnus Skies</b>
      <b className="atmosphere-unveiling-celestia">
        Atmosphere: Unveiling Celestial Secrets
      </b>
      <img
        className="property-1variant2-child14"
        alt=""
        src="/rectangle-181.svg"
        style={rectangleIcon3Style}
      />
      <TravelFormContainer />
    </div>
  );
};

export default Property1Variant2;
