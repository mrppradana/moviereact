import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Testing.css";
import axios from "axios";

const Navbar = () => {
  const toggleMenu = () => document.body.classList.toggle("open");
  return (
    <>
      <button className="burger" onClick={toggleMenu}></button>
      <div className="background"></div>
      <div className="menu">
        <nav>
          <Link to="/Page" style={{ animationDelay: "0.2s" }}>
            Home
          </Link>
          <a style={{ animationDelay: "0.3s" }}>Profile</a>
          <a style={{ animationDelay: "0.4s" }}>Series</a>
          <a style={{ animationDelay: "0.5s" }}>movies</a>
        </nav>
      </div>
    </>
  );
};

function Home() {
  return (
    <section className="home">
      <div className="text">Series</div>
      <div className="alert alert-success" role="alert">
        Checkout Our New Series!
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://en.gundam.info/gundaminfo/en/heroimage/3LKZDKmrnyf8d8zJ/2022/10/860x484english_logo_COPYRIGHT.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://en.gundam.info/gundaminfo/en/heroimage/kq3vqCBxDCuvUm8N/2020/03/GBDR_hero.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://en.gundam.info/gundaminfo/en/heroimage/kq3vqCBxDCuvUm8N/2020/03/GBDR_hero.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Hathaway Flash</h5>
            <p>Mobile Suit Gundam</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div
      className="breadcrumb-item"
      style={{ marginLeft: "5%", marginTop: "10px" }}
    >
      <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="page.html">Home</a>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ color: "var(--text-color)" }}
          >
            Series
          </li>
        </ol>
      </nav>
    </div>
  );
}
const WitchCard = () => {
  const [filmPopular, setFilmPopular] = useState([]);

  async function getData() {
    await axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "51c9d5760571e85e84cae213864ebd12",
        },
      })
      .then(async (response) => {
        const movieData = await Promise.all(response.data.results);
        setFilmPopular(movieData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        className="row"
        style={{ marginTop: "10px", marginLeft: "5%", marginRight: "5%" }}
      >
        {filmPopular.map((movie, index)=>{
          console.log(movie);
          return(
            <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="card" style={{ border: "none" }}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="movie" />
              <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-sub-title">New Series</p>
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: "20px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#product1"
                >
                  watch now!
                </button>
              </div>
            </div>
          </div>
          )
        })}
      </div>
      <div
        className="modal fade"
        id="product1"
        tabIndex="-1"
        aria-labelledby="product1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Witch From Mercury
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bQjXXzdEnMw?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-modal">
              An era when a multitude of corporations have entered space and
              built a huge economic system. After transferring to the Asticassia
              School of Technology from the planet Mercury, Suletta Mercury has
              experienced a school life filled with encounters and excitement,
              as both Miorine Rembran's bridegroom and a member of GUNDAM-ARM,
              Inc.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                <a href="https://www.youtube.com/playlist?list=PLJV1h9xQ7Hx_jXtO1GrrS0to_ojc672HG">
                  Watch!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Carousel />
      <Breadcrumb />
      <WitchCard />
    </>
  );
}

export default App;
