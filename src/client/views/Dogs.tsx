import * as React from "react";
import { useEffect, useState } from "react";

const dogs = () => {
  const [dogs, setdogs] = useState([]);

  useEffect(() => {
    getdogData();
  }, []);

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjUsImVtYWlsIjoicmVnaXN0ZXJhZ2FpbkB0ZXN0LmNvbSIsInJvbGUiOjEsImlhdCI6MTYzODMwNTIzNCwiZXhwIjoxNjM5NjAxMjM0fQ.JGaUfqG53oIRCemFbIyPQS0934djK2tb028fx2KwmX4";

  const getdogData = async () => {
    const res = await fetch("/api/dogs", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const alldogs = await res.json();
    console.log(alldogs);
    setdogs(alldogs);
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
              <h1 className="mt-5 title">Find the perfect dog!</h1>
              <h4 className="top-paragraph">
                we have many dogs to choose from, all in desperate need of a
                home. Adopt a dog today to not only save a life, but to also
                gain a best friend in the process!
              </h4>
              <a className="mt-4 dog-top-button btn" href="#scroll-bot">
                See Our dogs Below
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
              </a>
            </div>
            <div className="dog-img">
              <img
                className="dog-img "
                src="https://i.imgur.com/EvsdNGR.png"
                alt="dog"
              />
            </div>
          </div>
        </header>
        {/* <img className="bg-img" src="https://i.imgur.com/Qow7bWL.png" alt="bg"/> */}

        <div className="why-adopt-section">
          <div className="container why-adopt-container">
            <h1 className="dog-lower-title">why adopt a dog?</h1>

            <div className="d-flex justify-content-evenly align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className="house-img  "
                      src="https://i.imgur.com/bvP9NJ0.png"
                      alt="house"
                    />
                    <h3 className="dog-lower-one text-center">
                      dogs are playful
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
                    <h3 className="dog-lower-two text-center">
                      dogs are loyal
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
                    <h3 className="dog-lower-three text-center">
                      dogs are affectionate
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-container" id="scroll-bot">
        <div className="dog-info container">
          <section className="row justify-content-center ">
            <h1 className="row justify-content-center mt-5">Find dogs</h1>
            {dogs.map((dogs) => (
              <div className="card" style={{ width: "36rem" }}>
                <div className="card-body" key={`dog-name-${dogs.id}`}>
                  {/* <img src={dogs.photos} className="card-img-top"/> */}
                  <h4 className="card-title">My Name is {dogs.name}</h4>
                  <h5 className="card-text">Description:{dogs.description}</h5>
                  {dogs.age == "adult" ? (
                    <h5 className="card-text"> I'm an {dogs.age} dog</h5>
                  ) : (
                    <h5 className="card-text"> I'm a {dogs.age} dog</h5>
                  )}

                  <h5 className="card-text">I'm {dis()} miles away from you</h5>
                  <button
                    type="button"
                    className="btn btn-dark dog-favorite-btn"
                  >
                    Favorite Me
                  </button>
                  <br />
                  <a href={dogs.url} className="btn-view-dog">
                    View dog{" "}
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
export default dogs;
