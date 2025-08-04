// src/pages/Home.js
import React from "react";
import "./Home.css"; // Import the custom CSS for Home page styling
import { Link } from "react-router-dom";
import SteelSheets from "../Images/SteelSheets.jpg";
import SteelPipes from "../Images/SteelPipes.jpg";
import SteelBars from "../Images/SteelBars.jpg";
import TeamVisit from "../Images/TeamVisit.jpg";
import TeamVisit2 from "../Images/TeamVisit2.jpg";
import TeamVisit3 from "../Images/TeamVisit3.jpg";
import TeamVisit4 from "../Images/TeamVisit4.jpg";
import FactoryMachines from "../Images/FactoryMachines.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section className="welcome-section text-center">
        <div className="container">
          <h1>Welcome to Jieyang Steel Company</h1>
          <p>
            China Jieyang International steel factory is located in Jinghai,
            Tianjin, China. Specialized in manufacturing Steel Pipes, Galvanized
            Coils, PPGI and Roofing Sheet for construction, We also supply many
            kinds of Steel Product. We have four wholly subsidiary factories, a
            total of 14 automatic welding production lines, the monthly
            comprehensive production capacity is over 50000 tons. We also own 4
            galvanizing production lines, 2 galvalume production lines, 3 colour
            coated lines, the annul output is over 500000 tons. In order to meet
            customer demand, we have professional matched processing plants to
            support export trade, processing outside and inner threaded, oiled,
            painted, PVC packaging and punching. Our products are widely used in
            buildings,structures, greenhouse, furniture, Photovoltaic stents,
            water conveyance, bridges, tunnels, culverts and other horizontal
            formwork support. Our company has established good trade relations
            with more than 50 countries. Our company follows a policy of
            “customer first, strive for progress”. We sincerely with to
            establish a mutual-benefit business relationship with the clients
            from all over the worl
          </p>
          <a href="/products" className="btn btn-secondary">
            Explore Our Products
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products text-center">
        <h2>Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={SteelSheets} alt="Steel Sheets" />
              <div className="card-body">
                <h5 className="card-title">Steel Sheets</h5>
                <p className="card-text">
                  High-quality steel sheets for various industries.
                </p>
                <Link to="/products" className="btn btn-secondary">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={SteelPipes} alt="Steel Pipes" />
              <div className="card-body">
                <h5 className="card-title">Steel Pipes</h5>
                <p className="card-text">
                  Durable and reliable steel pipes for construction and more.
                </p>
                <Link to="/products" className="btn btn-secondary">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={SteelBars} alt="Steel Bars" />
              <div className="card-body">
                <h5 className="card-title">Steel Bars</h5>
                <p className="card-text">
                  Precision-cut steel bars for manufacturing purposes.
                </p>
                <Link to="/products" className="btn btn-secondary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Visit Section */}
      <section className="factory-visit text-center my-5">
        <h2>Factory Visit</h2>
        <p>
          Come visit our state-of-the-art steel manufacturing facility and see
          the process behind our high-quality products. We welcome industry
          professionals and clients to explore our factory and learn more about
          our production processes.
        </p>

        <div className="factory-images">
          <img src={TeamVisit} alt="Factory Image 1" className="img-fluid" />
          <img src={TeamVisit2} alt="Factory Image 2" className="img-fluid" />
          <img src={TeamVisit3} alt="Factory Image 2" className="img-fluid" />
          <img src={TeamVisit4} alt="Factory Image 2" className="img-fluid" />
          <img
            src={FactoryMachines}
            alt="Factory Image 2"
            className="img-fluid"
          />
        </div>

        <div className="my-3">
          <Link to="/contact">
            <button className="btn btn-success">Schedule a Visit</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
