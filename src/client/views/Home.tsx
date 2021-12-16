import React from "react";
import { useState, useEffect, useRef } from "react";
import Nav from "../components/Navigation";
import Image from "react-bootstrap/Image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import SlideCard from "../components/SlideCard";
import Footer from "../components/Footer";
import Slider from "react-slick";
import Signup from "../components/Signup";
import Login from "../components/Login";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { gsap } from "gsap";
const Home = () => {
  //   Imgs arr / slide data
  const imgs = [
    {
      img: "https://i.imgur.com/JnFdSLp.png",
    },
    {
      img: "https://i.imgur.com/6Iyg5Oq.png",
    },
    {
      img: "https://i.imgur.com/F5nsCzY.png",
    },
    {
      img: "https://i.imgur.com/ZTTW7TC.png",
    },
  ];
  const randomImg = Math.floor(Math.random() * imgs.length);
  const slideData = [
    {
      title: "Meghan and Gary",
      description:
        "Meghan adopted her dog Gary through us in 2015 after moving for a new job in Birmingham.",
      years: 6,
      picture:
        "https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Jake and Skipper",
      description:
        "Jake used Fetch to find his best friend Skipper in 2017 and has been happy ever since.",
      years: 4,
      picture:
        "https://images.pexels.com/photos/1654486/pexels-photo-1654486.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      title: "Alice and Marley",
      description:
        "Alice was one of the first pet owners to use our services in 2012 where she found Marley.",
      years: 8,
      picture:
        "https://images.pexels.com/photos/6001407/pexels-photo-6001407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Jamie, Max, and Bailey",
      description:
        "Jamie used Fetch in 2016 and 2019 to find both of his wonderful dogs, Max and Bailey.",
      years: 6,
      picture:
        "https://images.pexels.com/photos/8944741/pexels-photo-8944741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];
  // Ref
  const sliderRef = useRef(null);
  const headerRef = useRef();
  // Animations
  useEffect(() => {
    gsap.to(headerRef.current, { opacity: 1, delay: 1 });
  }, []);
  // States
  const [currentArrow, setCurrentArrow] = useState("right");
  const slideRight = () => {
    setCurrentArrow("right");
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    setCurrentArrow("left");
    sliderRef.current.slickPrev();
  };
  // Modal login
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  // Modal signup
  const [showSignup, setShowSignup] = useState(false);
  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);
  return (
    <>
      <main ref={headerRef} id="main">
        <div className="container main-container d-flex justify-content-between align-items-center">
          <div className="main-left">
            <h1 className="main-title mb-3">Find your best friend 🐶</h1>
            <p className="main-description mb-4">
              Welcome to Fetch. Our app allows you to find both dogs and cats in
              the state of Alabama that are currently in need of a home. Choose
              from over 6,000 animals in our system and find the perfect pet for
              you. Adoption is only a click away with Fetch!
            </p>
            <div className="main-form-area d-flex flex-column mb-5">
              <div className="main-btn-area d-flex flex-column mb-5">
                <button className="btn btn-dog-directory w-50 mb-3 p-2">
                  <Link className="dogs-links" to={"/Cats"}>
                    Find Dogs{" "}
                    <BsFillArrowRightCircleFill className="btn-arrow" />
                  </Link>
                </button>
                <button className="btn btn-cat-directory  w-50 p-2">
                  <Link className="cats-links" to={"/Cats"}>
                    Find Cats{" "}
                    <BsFillArrowRightCircleFill className="btn-arrow" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="main-right">
            <Image
              src={imgs[randomImg].img}
              alt="pet"
              fluid
              className="main-img"
            />
          </div>
        </div>
      </main>
      <section id="success" className="success-stories">
        <div className="container success-stories-container">
          <h2 className="success-title">Success Stories</h2>
          <p className="success-description text-muted mt-3">
            Pet owners from all across Alabama have used Fetch to find their furever friend. Below you will find just a few of our success stories! We also love hearing everyone's story so don't hesitate to tell us yours if you have found your cat or dog through Fetch.
          </p>
          <div className="arrows d-flex justify-content-end mt-4 mb-4">
            <BsArrowLeft
              onClick={slideLeft}
              className={`slider-left mx-2 ${currentArrow === "left" ? "active-arrow" : ""
                }`}
            />
            <BsArrowRight
              onClick={slideRight}
              className={`slider-right ${currentArrow === "right" ? "active-arrow" : ""
                }`}
            />
          </div>
          <Slider
            ref={sliderRef}
            slidesToShow={3}
            dots={false}
            responsive={[
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {slideData.map((slide, index) => {
              return (
                <SlideCard
                  key={`slider-card-${index}`}
                  slideImg={slide.picture}
                  slideTitle={slide.title}
                  slideDescription={slide.description}
                  slideYears={slide.years}
                />
              );
            })}
          </Slider>
        </div>
      </section>
      <section id="adopt" className="why-adopt p-3">
        <div className="container why-adopt-container d-flex justify-content-between align-items-center">
          <div className="why-adopt-left">
            <h2 className="why-adopt-title">Why Adopt?</h2>
            <p className="why-adopt-description">
              The number of euthanized animals could be reduced dramatically if
              more people adopted pets instead of buying them. When you adopt,
              you save a loving animal by making them part of your family and
              open up shelter space for another animal who might desperately
              need it.
            </p>
          </div>

          <div className="why-adopt-right">
            <img
              src="https://i.imgur.com/uMeQb7l.png"
              alt=""
              className="why-adopt-img img-fluid"
            />
          </div>
        </div>
      </section>

      <section id="sponsors" className="our-sponsors">
        <div className="container our-sponsors-container">
          <div className="our-sponsors-top">
            <h2 className="our-sponsors-title">Our Sponsors</h2>
            <p className="our-sponsors-description text-muted">
              Without our incredible sponsors, Fetch would not be possible. We
              would like to thank every company and organization who has
              contributed to our app. Thank you for making this app a reality!
            </p>
          </div>
          <div className="our-sponsors-bottom mt-4 gx-5 gy-5 row">
            <div className="col-lg-3 col-6">
              <img
                src="https://harnessgiving.com/assets/img/harness-clients/gbhs-wide.png"
                alt=""
                className="sponsor img-fluid"
              />
            </div>

            <div className="col-lg-3 col-6">
              <img
                src="https://i.imgur.com/jAGRP8t.png"
                alt=""
                className="sponsor img-fluid"
              />
            </div>

            <div className="col-lg-3 col-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/59233110197aea9830d1d4e2/1634244336706-KUD7S3C1AKEJGU3SLP0B/4c_Horizontal.png?format=750w"
                alt=""
                className="sponsor img-fluid"
              />
            </div>

            <div className="col-lg-3 col-6">
              <img
                src="https://i.imgur.com/1ViJ7ET.png"
                alt=""
                className="sponsor img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer footerView="#F9ECDC" />
    </>
  );
};

export default Home;

