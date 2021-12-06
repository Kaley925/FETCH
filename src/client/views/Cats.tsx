import * as React from "react";
import { useEffect, useState } from "react";

const Cats: React.FC<CatsProps> = ({ favorite }) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCatData();
  }, []);

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjUsImVtYWlsIjoicmVnaXN0ZXJhZ2FpbkB0ZXN0LmNvbSIsInJvbGUiOjEsImlhdCI6MTYzODMwNTIzNCwiZXhwIjoxNjM5NjAxMjM0fQ.JGaUfqG53oIRCemFbIyPQS0934djK2tb028fx2KwmX4";

  const getCatData = async () => {
    const res = await fetch("/api/cats", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const allCats = await res.json();
    console.log(allCats);
    setCats(allCats);
  };

  const dis = () => {
    return Math.floor(Math.random() * 50) + 1;
  };

  return (
    <>
      <div className="top-container">
        <header className="bg-img d-flex justify-content-between align-items-center">
          <div className="container header-container d-flex justify-content-between align-items-center">
            <div className="text-area">
              <h1 className="mt-5 title">Find the perfect cat!</h1>
              <h4 className="top-paragraph">
                we have many cats to choose from, all in desperate need of a
                home. Adopt a cat today to not only save a life, but to also
                gain a best friend in the process!
              </h4>
              <button className="mt-4 cat-top-button btn">
                See Our Cats Below{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                </svg>
              </button>
            </div>
            <div className="cat-img">
              <img
                className="cat-img "
                src="https://i.imgur.com/EvsdNGR.png"
                alt="cat"
              />
            </div>
          </div>
        </header>

        <div className="why-adopt-section">
          <div className="container why-adopt-container">
            <h1 className="cat-lower-title">why adopt a cat?</h1>

            <div className="d-flex justify-content-evenly align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className="house-img  "
                      src="https://i.imgur.com/bvP9NJ0.png"
                      alt="house"
                    />
                    <h3 className="cat-lower-one text-center">
                      Cats are playful
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className="badge-img "
                      src="https://i.imgur.com/VBBfDxR.png"
                      alt="badge"
                    />
                    <h3 className="cat-lower-two text-center">
                      Cats are loyal
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className="girl-img"
                      src="https://i.imgur.com/LmBzKq3.png"
                      alt="girl"
                    />
                    <h3 className="cat-lower-three text-center">
                      Cats are affectionate
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="cat-info container">
          <section className="row justify-content-center ">
            <h1 className="row justify-content-center mt-5">Find Cats</h1>
            {cats.map((cats) => (
              <div className="card" style={{ width: "36rem" }}>
                <div className="card-body" key={`cat-name-${cats.id}`}>
                  {/* <img src={cats.photos} className="card-img-top"/> */}
                  <h4 className="card-title">My Name is {cats.name}</h4>
                  <h5 className="card-text">Description:{cats.description}</h5>
                  {cats.age == "adult" ? (
                    <h5 className="card-text"> I'm an {cats.age} cat</h5>
                  ) : (
                    <h5 className="card-text"> I'm a {cats.age} cat</h5>
                  )}

                  <h5 className="card-text">I'm {dis()} miles away from you</h5>
                  <button
                    type="button"
                    className="btn btn-dark cat-favorite-btn"
                    onClick={() => favorite(cats)}
                  >
                    Favorite Me
                  </button>
                  <br />
                  <a href={cats.url} className="btn-view-cat">
                    View Cat{" "}
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

interface CatsProps {
  favorite: any;
}

export default Cats;
