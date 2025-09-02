import React from "react";
import PageTitle from "../components/PageTitle";
import { PiPulseBold } from "react-icons/pi";

const Services = () => {
  return (
    <section id="services" className="services section">
      <PageTitle
        pageTitle="Services"
        titleDescr="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur vel illum qui dolorem"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4 servies-title">
              Consectetur adipiscing elit sed do eiusmod tempor
            </h2>
            <p className="mb-4">
              Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
              volutpat velit className aptent taciti sociosqu ad litora.
            </p>
            <a href="#" className="btn btn-outline-primary">
              See all services
            </a>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item">
                  <PiPulseBold className="icon" />

                  <h3>
                    <a href="service-details.html">Eget nulla facilisi etiam</a>
                  </h3>
                  <p>
                    Vestibulum morbi blandit cursus risus at ultrices mi tempus
                    imperdiet nulla.
                  </p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item">
                  <PiPulseBold className="icon" />
                  <h3>
                    <a href="service-details.html">Duis aute irure dolor</a>
                  </h3>
                  <p>
                    Auctor neque vitae tempus quam pellentesque nec nam aliquam
                    sem et tortor.
                  </p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item">
                  <PiPulseBold className="icon" />
                  <h3>
                    <a href="service-details.html">Excepteur sint occaecat</a>
                  </h3>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium.
                  </p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item">
                  <PiPulseBold className="icon" />
                  <h3>
                    <a href="service-details.html">
                      Tempor incididunt ut labore
                    </a>
                  </h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat duis
                    aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
