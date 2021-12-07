import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Cats from "./views/Cats";
import Dogs from "./views/Dogs";
import Profile from "./views/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Navigation";
import Loading from "./views/Loading";
import { TOKEN_KEY } from "./services/api-services";

/* HOOK REACT EXAMPLE */

const App = () => {
  // Login state
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.clear();
  };

  // Modal login
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  // Modal signup
  const [showSignup, setShowSignup] = useState(false);
  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  //  Favorites
  const [favorites, setFavorites] = useState([]);
  const handleFavorites = (cats: any) => {
    setFavorites([...favorites, cats]);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    const favoritesParsed = JSON.parse(localStorage.getItem("favorites"));
    console.log(favoritesParsed);
  };

  return (
    <BrowserRouter>
      <Signup modalView={showSignup} handleSignupClose={handleSignupClose} />
      <Login modalView={showLogin} handleLoginClose={handleLoginClose} />

      <Nav
        handleLogin={handleLoginShow}
        handleSignup={handleSignupShow}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        bgView="#FBF4EA"
        favoriteNumber={favorites.length}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/Cats" element={<Cats favorite={handleFavorites} />} />
        <Route path="/Dogs" element={<Dogs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
