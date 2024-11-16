import { FaArrowCircleRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <main className="hero-section main">
      <div className="containerv grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One Country at a Time.
          </h1>
          <h>Here are some intresting facts we are proud of </h>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darker btn-inline bg-white-box">
            Start Exploring <FaArrowCircleRight />
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="/images/images.jpeg" 
            alt="world is beauty" 
            className="banner-images" 
          />
        </div>
      </div>

      {/* World Map Image Section */}
      {/* <div className="world-map-container">
        <img 
          src="/images/map.jpeg" 
          alt="World Map" 
          className="world-map-image" 
        />
      </div> */}
    </main>
  );
};

export default Home;
