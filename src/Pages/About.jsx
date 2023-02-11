import React from "react";
import Header from "../components/Header";
import img2 from "../../public/images/black-panther-vintage-movie-poster-original-1-sheet-27x41.jpeg"
import img1 from "../../public/images/black panther 2.webp"
import "./About.scss"

const About = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid bg-stone-800 px-28 py-4">

        <div className="d-flex justify-between text-white mt-2">

<div className="col-md-9">
  <h1 className="display-3">Black Panther</h1>
  <span>2018 / PG-13 / 2h 14m</span>
</div>

<div className="col-md-3 d-flex align-items-center justify-between">
    <div>
    <p className="text-gray-400 fs-large">IMDb RATING</p>

<div className="d-flex align-items-center">
<i className="fa-solid fa-star text-yellow-500 pe-1"></i>
<div>
<h4>7.3<span className="text-gray-500">/10</span></h4>
</div>
</div>
    </div>

    <div>
      <p className="text-gray-400 fs-large">YOUR RATING</p>
      <h4><i className="fa-solid fa-star text-primary"></i> RATE</h4>
    </div>

    <div>
      <p className="text-gray-400 fs-large">POPULARITY</p>
      <h4>64 /247</h4>
    </div>
</div>

        </div>

        <div className="boxes">
<div className="col-md-3">
  <img src={img2} alt="" />
</div>

<div className="col-md-7">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xjDjIWPwcPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div className="col-md-2 d-flex text-white flex-column">
  <div className="col-md-6 h-50 w-full m-auto border d-flex flex-column justify-center align-items-center rounded">
    <i className="fa-solid fa-play fs-1"></i> <br />
    75 VIDEOS
  </div>
  <div className="col-md-6 h-50 w-full m-auto border d-flex flex-column justify-center align-items-center rounded">
    <i className="fa-solid fa-image fs-1"></i> <br />
    99+ PHOTOS
  </div>
</div>
        </div>
      </div>

      <div className="container-fluid bg-stone-800 px-28 py-4 pt-5">

        <div className="d-flex justify-between text-white mt-2">

<div className="col-md-9">
  <h1 className="display-3">Black Panther: Wakanda Forever</h1>
  <span>2022 / PG-13 / 2h 41m</span>
</div>

<div className="col-md-3 d-flex align-items-center justify-between">
    <div>
    <p className="text-gray-400 fs-large">IMDb RATING</p>

<div className="d-flex align-items-center">
<i className="fa-solid fa-star text-yellow-500 pe-1"></i>
<div>
<h4>6.9<span className="text-gray-500">/10</span></h4>
</div>
</div>
    </div>

    <div>
      <p className="text-gray-400 fs-large">YOUR RATING</p>
      <h4><i className="fa-solid fa-star text-primary"></i> RATE</h4>
    </div>

    <div>
      <p className="text-gray-400 fs-large">POPULARITY</p>
      <h4>3 /46</h4>
    </div>
</div>

        </div>

        <div className="boxes">
<div className="col-md-3">
  <img src={img1} alt="" />
</div>

<div className="col-md-7">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/aFgtBbSwxxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div className="col-md-2 d-flex text-white flex-column">
  <div className="col-md-6 h-50 w-full m-auto border d-flex flex-column justify-center align-items-center rounded">
    <i className="fa-solid fa-play fs-1"></i> <br />
    32 VIDEOS
  </div>
  <div className="col-md-6 h-50 w-full m-auto border d-flex flex-column justify-center align-items-center rounded">
    <i className="fa-solid fa-image fs-1"></i> <br />
    99+ PHOTOS
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default About;
