import React from "react";
import Header from "../components/Header";
import Footer from './../components/Footer';
import "./Contact.scss"

const Contact = () => {
  return (
    <div>
      <Header />
      <section>
        <ul>
          <li><a href="#">NEWS</a></li>
          <li><a href="#">COMICS</a></li>
          <li><a href="#">CHARACTERS</a></li>
          <li><a href="#">MOVIES</a></li>
          <li><a href="#">TV SHOWS</a></li>
          <li><a href="#">GAMES</a></li>
          <li><a href="#">VIDEOS</a></li>
          <li><a href="#">MORE</a></li>
        </ul>

        <article>
          <div className="btn-groups">
            <button>GET IT NOW</button>
            <button>STREAM ON DISNEY+</button>
          </div>
        </article>

        <div className="trailer">
          <iframe src="https://www.youtube.com/embed/dxWvtMOGAhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="trailer-text">
          <span>TRAILERS & EXTRAS</span>
          <h4>Marvel Studios' Black Panther | Teaser Trailer</h4>
          <p>HERO. LEGEND. KING. Watch Marvel Studio's Black Panther teaser trailer now.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
