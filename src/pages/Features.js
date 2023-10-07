import { Link } from "react-router-dom";
import "./Features.css";


const Features = () => {
  return (
    <div className="features">
      <div className="footer">
        <img className="footer-child" alt="" src="/rectangle-7.svg" />
        <img className="footer-item" alt="" src="/group-18.svg" />
        <div className="team-ufo"> TEAM UFO</div>
        <div className="unbelievably-funny-observers">
          Unbelievably Funny Observers
        </div>
      </div>
      <div className="card">
        <div className="card-child" />
        <img className="image-13-icon" alt="" src="/image-13@2x.png" />
        <div className="card-item" />
        <div className="card-inner" />
        <div className="kepler-22b-has-diverse-container">
          <p className="p"></p>
          <p className="p">
            Kepler-22b has diverse landscapes of land and water. Its terrain
            offers vast oceans with alien marine life and unexplored continents.
            Ideal for both beach lovers and adventurers.
          </p>
        </div>
        <div className="land-and-ocean-container">
          <p className="p">Land and Ocean</p>
        </div>
      </div>
      <div className="card1">
        <div className="rectangle-div" />
        <div className="line-div" />
        <div className="while-kepler-22b-can-container">
          <p className="p">
            While Kepler-22b can be a home to unique and mysterious life forms.
            Imagine encountering strange flora and fauna, each with its own
            fascinating adaptation to this alien world.
          </p>
        </div>
        <div className="alien-ecosystems">Alien Ecosystems</div>
        <img className="image-15-icon" alt="" src="/image-15@2x.png" />
        <div className="card-child1" />
      </div>
      <div className="card2">
        <div className="group-div">
          <div className="group-child" />
        </div>
        <div className="card-child2" />
        <div className="kepler-22b-resides-in">
          Kepler-22b resides in the "Goldilocks" zone around Kepler-22,
          providing the optimal temperature for surface liquid water, essential
          for known forms of life. Its conditions are perfectly balanced.
        </div>
        <div className="just-right-temperature-container">
          <p className="p">Just Right Temperature</p>
        </div>
        <img className="image-13-icon" alt="" src="/image-17@2x.png" />
        <div className="card-child3" />
      </div>
      <div className="card3">
        <div className="card-child4" />
        <div className="card-child5" />
        <div className="card-child6" />
        <div className="kepler-22b-has-an">
          Kepler-22b has an Earth-like atmosphere, neither too thick nor thin.
          This allows for deep breaths of fresh air while exploring the planet's
          marvels. Breathing there is comfortable and easy.
        </div>
        <div className="breathable-atmosphere"> Breathable Atmosphere</div>
        <img className="image-14-icon" alt="" src="/image-14@2x.png" />
      </div>
      <div className="card4">
        <div className="card-child7" />
        <div className="card-child8" />
        <div className="card-child9" />
        <div className="kepler-22b-is-a">
          Kepler-22b is a beacon of hope in the cosmos. While not ready to move,
          it signifies endless possibilities. The future of humanity among the
          stars remains uncertain but promising.
        </div>
        <div className="the-future-beckons">The Future Beckons</div>
        <img className="image-16-icon" alt="" src="/image-16@2x.png" />
      </div>
      <div className="rectangle-parent">
        <div className="group-item" />
        <div className="features-kepler-habitable-container">
          <p className="p">5 Features that make <br>
            
          </br>Kepler Habitabl </p>
        </div>
      </div>
      <div className="header">
        <div className="r">
          {/* <img className="menu-icon" alt="" src="/menu.svg" /> */}
        </div>
        <div className="solar-title">
          <p className="p">Welcome to Kepler-22b!</p>
        </div>
        <div className="solar-title">
          <p className="p">Welcome to Kepler-22b!</p>
        </div>
        {/* <div className="solar-title2">Home</div>
        <div className="solar-title3">Kepler-22b</div>
        <div className="solar-title4">Features</div> */}
        <div className="solar-title2"><Link to="/">Home</Link></div>
        <div className="solar-title3"><Link to="/kepler">Kepler-22</Link></div>
        <div className="solar-title4"><Link to="/features">Features</Link></div>
        <div className="creating-worlds-beyond">
          Creating worlds beyond our own
        </div>
      </div>
      <div className="features-child" />
    </div>
  );
};

export default Features;
