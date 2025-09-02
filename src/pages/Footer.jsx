import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">EasyFolio</strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href="">
            <BsTwitterX />
          </a>
          <a href="">
            <BsFacebook />
          </a>
          <a href="">
            <BsInstagram />
          </a>
          <a href="">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
