import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Loader from "./components/loader/loader";
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
import USerContext from "./context/UserContext";
import Admin from "./pages/admin/admin";

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
  },[]);

  return (
    <div classNameName="">
      <USerContext.Provider value={currentUser}>
        {isLoading && <Loader />}

        <Routes>
        {/* <Route path="/admin/*" element={<Admin/>}/> */}
          
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/register" element={<Register />} />

          <Route element={<PrivateRoutes user={currentUser} />}>
            <Route path="/shop/:id" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/news/:id" element={<SingleNews />} />
            <Route path="/news" element={<News />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About user={currentUser} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </USerContext.Provider>
    </div>
  );
}

export default App;
