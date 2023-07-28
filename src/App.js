import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import AppHeader from "./components/appHeader/header";

function App() {
  return (
    <div classNameName="">

      {/* < AppHeader/> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
