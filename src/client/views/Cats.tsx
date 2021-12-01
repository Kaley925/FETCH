import * as React from 'react';
import {useEffect, useState} from "react";

const Cats = () => {
    const [cats, setCats] = useState([]);
    
    useEffect(() => {
      getCatData()
    },[])
    
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjUsImVtYWlsIjoicmVnaXN0ZXJhZ2FpbkB0ZXN0LmNvbSIsInJvbGUiOjEsImlhdCI6MTYzODMwNTIzNCwiZXhwIjoxNjM5NjAxMjM0fQ.JGaUfqG53oIRCemFbIyPQS0934djK2tb028fx2KwmX4"

    const getCatData = async () => {
        const res = await fetch('/api/cats', {
          headers: {
              'Authorization': `Bearer ${apiKey}`
          },
      });
        const allCats = await res.json();
        console.log(allCats);
        setCats(allCats);
      };

     
    return(
        <>
        <h1 className="justify-content-center mt-5 row title">Find Your Furever Friend</h1>
        
        


        <div className="film-info container">
        <section className="row justify-content-center mt-5">
           {cats.map((cats) => (
            <div className="card" style={{ width: "36rem" }}>
              <div className="card-body" key={`cat-name-${cats.id}`}>
                <h4 className="card-title">Age:{cats.age}</h4>
                <h5 className="card-text">type:{cats.type}</h5>
                <h5 className="card-text">des:{cats.description}</h5>
                <h5 className="card-text">age:{cats.age}</h5>
              </div>
            </div>
          ))} 
        </section>
      </div>
        </>
    )
}
export default Cats ;

