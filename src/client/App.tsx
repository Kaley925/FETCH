import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Home from "./views/Home";
import Cats from "./views/Cats";
import Dogs from "./views/Dogs";
import Profile from "./views/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cats" element={<Cats />} />
        <Route path="/Dogs" element={<Dogs />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
