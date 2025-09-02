import React from "react";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">Contact</div>
              <h2 className="display-5 mb-4">
                Nemo enim ipsam voluptatem quia voluptas aspernatur
              </h2>
              <p className="lead mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam.
              </p>

              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <FaEnvelope className="me-3" />

                  <span>info@example.com</span>
                </div>

                <div className="info-item d-flex mb-3">
                  <FaPhoneAlt className="me-3" />
                  <span>+1 5589 55488 558</span>
                </div>

                <div className="info-item d-flex mb-4">
                  <FaMapMarkerAlt className="me-3" />
                  <span>A108 Adam Street, New York, NY 535022</span>
                </div>

                <a
                  href="#"
                  className="map-link d-inline-flex align-items-center"
                >
                  Open Map
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="contact-form card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body p-4 p-lg-5">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>

                    <div className="col-12 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit" className="btn btn-submit w-100">
                        Submit Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
