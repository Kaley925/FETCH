import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer: React.FC<FooterProps> = ({ footerView }) => {
  return (
    <footer style={{ backgroundColor: footerView }} className="footer p-2">
      <div className="footer-container container d-flex justify-content-between align-items-center">
        <div className="logo-area m-auto mt-2">
          <h6 className="logo">Fetch &copy;</h6>
        </div>
        <div className="back-to-top d-flex align-items-center justify-content-center">
          <a
            href="#main"
            className="back-to-top-link d-flex align-items-center justify-content-center"
          >
            <p className="back-to-top-text">Back to Top</p>
            <BsFillArrowUpCircleFill className="back-to-top-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

interface FooterProps {
  footerView: string;
}

export default Footer;
