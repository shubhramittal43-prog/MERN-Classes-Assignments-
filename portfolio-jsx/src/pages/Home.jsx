import "./Home.css";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="row align-items-center hero-section">

          <div className="col-lg-6 col-md-6">
            <h4 className="hello">Hello, I'm</h4>

            <h1 className="name">
              Shubhra <span>Mittal</span>
            </h1>

            <h3 className="title">
              BCA Student | MERN Stack Learner
            </h3>

            <p className="intro">
              Passionate about building responsive, elegant and user-friendly
              websites using HTML, CSS, Bootstrap, JavaScript and React JS.
            </p>

            <div className="button-group">
              <Link to="/about" className="about-btn">
                About Me
              </Link>

              <Link to="/contact" className="contact-btn">
                Contact Me
              </Link>
            </div>

          </div>

          <div className="col-lg-6 col-md-6 text-center">
            <img src={hero} alt="Hero" className="hero-img" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;