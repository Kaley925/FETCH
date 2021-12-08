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
  //dog stuff
  const [dogs, setdogs] = useState([]);

  useEffect(() => {
    getdogData();
  }, []);

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
  // //EMERGENCY DATA
  // const catarr = [
  //   { name: "Poppy", color: "Black & White / Tuxedo", age:'a Kitten', image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53813982/1/?bust=1638840067&width=720',description:'Looking for a date to your company’s holiday party? Look no further! These tuxedo kittens are dressed to the nines & ready to be your dinner date. Alex, Lily, & Poppy are about 9 weeks old, negative for feline leukemia & FIV, & have had their first round of vaccines.'},
  //   { name: "Pumpkin", color: "Tabby (Orange / Red)", age:'a Kitten', image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53722934/1/?bust=1638240845&width=720',description:'Pumpkin is an affectionate, friendly, and playful cat ready for adoption'},
  //   { name: "Simon", color:"Tabby (Black/ White)", age:'an Adult cat', image: 'https://i.gyazo.com/1ca337432563997e2c9a93be05a9abbe.png', description: 'Simon is a playful and loving cat that loves to knock stuff off the counter'},
  //   { name: "Little Bit", color: "Black & White / Tuxedo", age:'an Adult cat', image:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41890173/3/?bust=1560775155&width=720', description:"Little Bit was found as a super sick kitten and nursed back to health. He loves to play with pretty much anything that can be a toy. He's not a lap cat and doesn't like to be picked up, but does love to snuggle when it's his idea. He'll reward you with kitty kisses and biscuits."},
  //   { name: "Autumn", color: 'Tortoiseshell', age: 'a Young cat', image:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45505911/1/?bust=1578407842&width=720', description:"Autumn is a beautiful young tortoiseshell kitty available for adoption"},
  //   { name: "Casper", color: 'White', age: 'a Kitten', image:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53811084/1/?bust=1638826918&width=720', description:"Casper, much like the ghost is a very scared cat but once she opens up she is very playful"},
  // ];

  // const dogarr = [
  //   { name: "Darla", color: 'Brown', age: 'a Puppy', image:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53811087/1/?bust=1638826905&width=720', description:"Darla is a shepherd and labrador Retriever mix looking for a loving home this holiday season"},
  //   { name: "Janice", color:'Brown', age:'a Young dog', image:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53784063/1/?bust=1638658614&width=720', description:"Janice is an energetic young dog who loves to run around and play fetch"},

  // ]
  // //end of emergency data part 1 of 2

  const picarray = [
    "https://i.imgur.com/69ngm9z.jpg",
    "https://i.imgur.com/iwuWEe5.jpg",
    "https://i.imgur.com/IxufMPR.jpg",
    "https://i.imgur.com/68orjAZ.jpg",
    "https://i.imgur.com/LQ8xrQy.jpg",
    "https://i.imgur.com/8VwtWpR.jpg",
    "https://i.imgur.com/m3sxvgi.jpg",
    "https://i.imgur.com/NtUaHDt.jpg",
    "https://i.imgur.com/HezddLE.jpg",
    "https://i.imgur.com/66SkOMF.jpg",
  ];

  const picarraydogs = [
    "https://i.imgur.com/vLybVtA.jpg",
    "https://i.imgur.com/68o6gfJ.jpg",
    "https://i.imgur.com/h3WnW86.jpg",
    "https://i.imgur.com/aixg8VQ.jpg",
    "https://i.imgur.com/F6EPCny.jpg",
    "https://i.imgur.com/zQyKGjZ.jpg",
    "https://i.imgur.com/3cd205s.jpg",
    "https://i.imgur.com/kQrTdif.jpg",
    "https://i.imgur.com/hTgI8wJ.jpg",
    "https://i.imgur.com/VjrEh6Z.jpg",
  ];

  return (
    <>
      <div className="top-container">
        <header className="bg-img d-flex justify-content-between align-items-center">
          <div className="container header-container d-flex justify-content-between align-items-center">
            <div className="text-area">
              <h1 className="mt-5 title">Find the perfect pet!</h1>
              <h4 className="top-paragraph">
                we have many cats and dogs to choose from, all in desperate need
                of a home. Adopt a pet today to not only save a life, but to
                also gain a best friend in the process!
              </h4>
              <a className="mt-4 cat-top-button btn w-50 mb-3 p-2 first-btn" href='#kitty'>
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
              </a>
              <br/>
              <a className="mt-4 cat-top-button second-btn btn w-50 p-2" href="#doggie">
                See Our Dogs Below{" "}
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
            <h1 className="cat-lower-title">Why adopt a furry friend?</h1>

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
                      Pets are playful
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
                      Pets are loyal
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
                      Pets are affectionate
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
            <h1 className="row justify-content-center mt-5" id='kitty'>Find Cats</h1>
            {cats.map((cats, i) => (
              <div className="card box" style={{ width: "36rem" }}>
                <img
                  className="card-img-top cat-pic"
                  src={picarray[i]}
                  alt="cat images"
                />

                <div className="card-body" key={`cat-name-${cats.id}`}>
                  <h4 className="card-title">My Name is {cats.name}!</h4>
                  <h5 className="card-text">Breed: {cats.breed}</h5>
                  <h5 className="card-text">Gender: {cats.gender}</h5>
                      <h5 className="card-text">Age: {cats.age}</h5>
                  <h5 className="card-text">Location: {cats.shelter}</h5> 
                  <h5 className="card-text">I'm {cats.distance} miles away from you.</h5>
                  <button
                    type="button"
                    className="btn btn-dark cat-favorite-btn"
                    onClick={() => favorite(cats)}
                  >
                    Favorite Me
                  </button>
                </div>
              </div>
            ))}



<div className="bottom-container" id="scroll-bot">
        <div className="dog-info container">
          <section className="row justify-content-center ">
            <h1 className="row justify-content-center mt-5" id='doggie'>Find Dogs</h1>
            {dogs.map((dogs, i) => (
              <div className="card box" style={{ width: "36rem" }}>

                <img className="card-img-top cat-pic" src={picarraydogs[i]} alt="dog images"/>

                <div className="card-body" key={`dog-name-${dogs.id}`}>
                  {/* <img src={dogs.photos} className="card-img-top"/> */}
                  <h4 className="card-title">My Name is {dogs.name}!</h4>
                  <h5 className="card-text">Breed: {dogs.breed}</h5>
                  <h5 className="card-text">Gender: {dogs.gender}</h5>
                      <h5 className="card-text">Age: {dogs.age}</h5>
                  <h5 className="card-text">Location: {dogs.shelter}</h5> 
                  <h5 className="card-text">I'm {dogs.distance} miles away from you.</h5>
                  <button
                          type="button"
                          className="btn btn-dark dog-favorite-btn"
                          onClick={() => favorite(dogs)}
                        >
                          Favorite Me
                          </button>
                </div>
              </div>
            ))}
            </section>
                  
                
              </div>
            </div>

            {/* EMERGENCY SECTION  part 2 of 2*/}
            {/* {catarr.map((cats) => (
              <div className="card" style={{ width: "36rem" }}>
                 <img src={cats.image} className="card-img-top cat-pic" alt="cat img"/>
              <div className="card-body" key={`cat-name-${cats.id}`}>
                <h4 className="card-title">My Name is {cats.name}</h4>
                <h5 className="card-text">Description: {cats.description}</h5>
               <h5 className="card-text"> I'm {cats.age}</h5>
                <h5 className="card-text">I'm {dis()} miles away from you</h5>
                <button
                  type="button"
                  className="btn btn-dark cat-favorite-btn"
                  onClick={() => favorite(cats)}
                >
                  Favorite Me
                </button>
              </div>
            </div>
            ))}
            <h1 className="row justify-content-center mt-5">Find Dogs</h1>
            {dogarr.map((dogs) => (
              <div className="card" style={{ width: "36rem" }}>
                 <img src={dogs.image} className="card-img-top cat-pic" alt="cat img"/>
              <div className="card-body" key={`cat-name-${dogs.id}`}>
                <h4 className="card-title">My Name is {dogs.name}</h4>
                <h5 className="card-text">Description: {dogs.description}</h5>
               <h5 className="card-text"> I'm {dogs.age}</h5>
                <h5 className="card-text">I'm {dis()} miles away from you</h5>
                <button
                  type="button"
                  className="btn btn-dark cat-favorite-btn"
                  onClick={() => favorite(dogs)}
                >
                  Favorite Me
                </button>
              </div>
            </div>
            ))} */}

            {/* end of emergency section  part 2 of 2 */}
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
