import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "../node_modules/aos/dist/aos.css";
import "../node_modules/aos/dist/aos.js";

import "../node_modules/glightbox/dist/css/glightbox.min.css";
import "../node_modules/glightbox/dist/js/glightbox.min.js";

import "../node_modules/swiper/swiper-bundle.min.css";
import "../node_modules/swiper/swiper-bundle.min.js";

import "../node_modules/waypoints/lib/noframework.waypoints.min.js";
import "../node_modules/imagesloaded/imagesloaded.pkgd.min.js";
import "../node_modules/isotope-layout/dist/isotope.pkgd.min.js";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
