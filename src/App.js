import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";

function App() {
  return (
    <div classNameName="">
    
      <Routes>
        <Route path="/about" element={< About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
