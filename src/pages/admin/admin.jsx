import React from "react";
import Contact from "../contact/contact";
import { Route, Routes, Link } from "react-router-dom";
import Dashborad from "./pages/dasboard/Dashborad";
import Footer from "./../../components/footer/footer";
import SideNav from "./pages/sideNav/sideNav";
import Shop from "./pages/shop/Shop";

function Admin(props) {
  return (
    <div className="flex bg-dashBg  " style={{ height: "100vh" }}>
      <div className="hidden md:block w-72 mr-4  " style={{backgroundColor:'#37373c'}}>
        < SideNav/>
        {/* <Link to="/admin/contact">dashbord</Link> */}
      </div>
      <div
        style={{ maxHeight: "100vh", overflowY: "scroll" }}
        className="flex-1"
      >
        <p className="hidden">icon</p>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Dashborad />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default Admin;
