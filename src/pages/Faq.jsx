import React from "react";
import PageTitle from "../components/PageTitle";
import { FiChevronRight } from "react-icons/fi";

const Faq = () => {
  return (
    <section id="faq" className="faq section">
      <PageTitle
        pageTitle="Frequently Asked Questions"
        titleDescr="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur vel illum qui dolorem"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                <div className="faq-content">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
                <FiChevronRight className="faq-toggle" />
              </div>

              <div className="faq-item">
                <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                <div className="faq-content">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
                <FiChevronRight className="faq-toggle" />
              </div>

              <div className="faq-item">
                <h3>
                  Dolor sit amet consectetur adipiscing elit pellentesque?
                </h3>
                <div className="faq-content">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
                <FiChevronRight className="faq-toggle" />
              </div>

              <div className="faq-item">
                <h3>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </h3>
                <div className="faq-content">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
                <FiChevronRight className="faq-toggle" />
              </div>

              <div className="faq-item">
                <h3>Tempus quam pellentesque nec nam aliquam sem et tortor?</h3>
                <div className="faq-content">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
                <FiChevronRight className="faq-toggle" />
              </div>
              <div className="faq-item">
                <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                <div className="faq-content">
                  <p>
                    Enim ea facilis quaerat voluptas quidem et dolorem. Quis et
                    consequatur non sed in suscipit sequi. Distinctio ipsam
                    dolore et.
                  </p>
                </div>
                <FiChevronRight className="faq-toggle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
