import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h2>Crafting Digital Experiences with Passion</h2>
            <p className="lead">
              Transforming ideas into elegant solutions through creative design
              and innovative development
            </p>
            <div
              className="cta-buttons"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a href="#portfolio" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Connect
              </a>
            </div>
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img
                src="./img/profile/profile-1.webp"
                alt="Portfolio Hero Image"
                className="img-fluid"
                data-aos="zoom-out"
                data-aos-delay="300"
              />
              <div className="shape-1"></div>
              <div className="shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
