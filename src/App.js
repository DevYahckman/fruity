import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";
import AppHeader from "./components/appHeader/header";
import jwtDecode from "jwt-decode";
import React from "react";
import News from "./pages/news/News";
import SingleNews from "./pages/singleNews/SingleNews";
import Contact from "./pages/contact/contact";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Register from "./pages/register/Ragister";
import Logout from "./pages/logout/Logout";
import Login from "./pages/login/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
// import { render } from '@testing-library/react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setCurrentUser(user);
      //  console.log(user);
    } catch (ex) {}
  });

  return (
    <div classNameName="">
      {/* {isLoading && <Loader />} */}
      <AppHeader user={currentUser} />

      <Routes>
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoutes user={currentUser} />}>
          <Route path="/shop/:id" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Route>

        {/* <Route
          path="/shop/:id"
          element={currentUser ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/shop"
          element={currentUser ? <Shop /> : <Navigate to="/login" />}
        /> */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About user={currentUser} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
