import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "aos/dist/aos.css";
import "aos/dist/aos.js";

import "glightbox/dist/css/glightbox.min.css";
import "glightbox/dist/js/glightbox.min.js";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";

import "waypoints/lib/noframework.waypoints.min.js";
import "imagesloaded/imagesloaded.pkgd.min.js";
import "isotope-layout/dist/isotope.pkgd.min.js";

import "./index.css";
import App from "./App.jsx";
import "aos/dist/aos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
