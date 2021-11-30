import React from "react";

const Footer: React.FC<FooterProps> = ({ footerView }) => {
  return (
    <footer style={{ backgroundColor: footerView }} className="footer p-2">
      <div className="footer-container container d-flex justify-content-center align-items-center">
        <div className="logo-area mt-2">
          <h6 className="logo">Fetch &copy;</h6>
        </div>
      </div>
    </footer>
  );
};

interface FooterProps {
  footerView: string;
}

export default Footer;
