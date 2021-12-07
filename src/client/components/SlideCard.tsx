import React from "react";
import Card from "react-bootstrap/Card";

const SlideCard: React.FC<SlideCardProps> = ({
  slideImg,
  slideTitle,
  slideDescription,
  slideYears,
}) => {
  return (
    <>
      <div className="slide-card mt-4 card ">
        <img src={slideImg} alt="" className="slide-img card-img-top" />
        <div id="slider-body" className="slide-body card-body p-4">
          <h5 className="slide-title py-2">{slideTitle}</h5>
          <small className="slide-description text-muted">
            {slideDescription}
          </small>
          <div className="years-panel mt-3 d-flex align-items-center justify-content-between">
            <span className="years-text">Years owned:</span>
            <span className="years badge">{slideYears}</span>
          </div>
        </div>
      </div>
    </>
  );
};

interface SlideCardProps {
  slideImg: string;
  slideTitle: string;
  slideDescription: string;
  slideYears: number;
}

export default SlideCard;
