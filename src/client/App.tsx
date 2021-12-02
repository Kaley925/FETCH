import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Cats from "./views/Cats";
import Dogs from "./views/Dogs";
import Profile from "./views/Profile";
import Login from "./components/Login";

/* HOOK REACT EXAMPLE */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/Cats" element={<Cats />} />
        <Route path="/Dogs" element={<Dogs />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
