import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";
import React from "react";
import News from "./pages/news/News";
import SingleNews from "./pages/singleNews/SingleNews";
import Contact from "./pages/contact/contact";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <div classNameName="">
      {isLoading && <Loader />}
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
