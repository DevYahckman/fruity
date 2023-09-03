import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { FaRegNewspaper, FaUsers, FaUserAlt } from "react-icons/fa";

function SideNav({ handleSelect }) {
  const location = useLocation();
  const sideNavData = [
    {
      name: "Dashboard",
      icon: <MdDashboard size={20} />,
      link: "/admin",
      location: ["/admin"],
    },
    {
      name: "Shop",
      icon: <AiOutlineShoppingCart size={20} />,
      link: "/admin/shop",
      location: ["/admin/shop"],
    },
    {
      name: "News",
      icon: <FaRegNewspaper size={20} />,
      link: "/admin/news",
      location: ["/admin/news"],
    },
    {
      name: "Users",
      icon: <FaUsers size={20} />,
      link: "/admin/users",
      location: ["/admin/users"],
    },
    {
      name: "Profile",
      icon: <FaUserAlt size={20} />,
      link: "/admin/profile",
      location: ["/admin/profile"],
    },
    {
      name: "Sign Out",
      icon: <CiLogout size={20} />,
      link: "/admin/signOut",
      location: ["/admin/signOut"],
    },
  ];
  return (
    <div className="py-20">
      {sideNavData.map((item, i) => (
        <div onClick={handleSelect} className="rounded-xl    ">
          <Link
            to={item.link}
            className="font-bold text-white no-underline text-base "
          >
            <div
              className="mx-6 rounded-lg "
              style={{
                backgroundColor: item.location.includes(location.pathname)
                  ? "#e93a76"
                  : "",

                  boxShadow:item.location.includes(location.pathname)?"5px 5px 5px black":''
              }}
            >
              <li className="list-none flex flex-row items-center justify-center h-11">
                <div
                  style={{ display: "grid", flex: "30%", placeItems: "center" }}
                >
                  {" "}
                  {item.icon}
                </div>
                <div style={{ flex: "70%" }}> {item.name}</div>
              </li>
            </div>
          </Link>{" "}
          <br />
        </div>
      ))}
    </div>
  );
}

export default SideNav;
