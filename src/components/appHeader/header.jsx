import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
// import './header.module.scss'
// import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

function AppHeader(props) {
  const [active, setActive] = useState([0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inView, setInview] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 120;

      if (scrollY >= scrollThreshold) {
        setInview(true);
      } else {
        setInview(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navData = [
    {
      name: "Home",
      link: "/",
      icon: "",
    },
    {
      name: "About",
      link: "/about",
      icon: "",
    },
    {
      name: "News",
      link: "/news",
      icon: "",
    },
    {
      name: "Contact",
      link: "/contact",
      icon: "",
    },
    {
      name: "Shop",
      link: "#",
      icon: "",
    },
    {
      name: "SignUp",
      link: "#",
      icon: "",
    },
  ];
  return (
    <div
      className={`${styles.header} ${
        inView ? "bg-deepBlack" : ""
      } fixed w-full`}
    >
      <div className="  flex justify-between  p-4 lg:p-8 mx-4 md:mx-16">
        <div className={styles.logo}>
          <Link
            to="/"
            className="text-2xl text-primary underline underline-offset-3"
          >
            {" "}
            Fruity
          </Link>
        </div>

        <div className={` hidden lg:flex space-x-8 invisible lg:visible`}>
          {navData.map((item, index) => (
            <Link
              onClick={() => {
                setActive(index);
              }}
              style={{ color: active == index && "#F28123" }}
              to={item.link}
              className="text-sm no-underline text-white hover:text-primary font-bold"
            >
              {item.name}{" "}
            </Link>
          ))}
        </div>
        <div className="space-x-4 lg:mt-0 mt-3">
          <Link
            className="text-white text-sm font-bold
           transition-all duration-700 ease-in hidden lg:inline"
          >
            <FaShoppingCart />
          </Link>
          <Link
            className="text-white text-sm font-bold
           transition-all duration-700 ease-in "
          >
            <BiSearchAlt2 />
          </Link>
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl lg:hidden text-deepBlack font-bold bg-primary pt-2 px-2.5 py-0"
          >
            {isMenuOpen ? <GiHamburgerMenu /> : <MdOutlineCancel />}
          </Link>
        </div>
      </div>

      {/* Testing */}
      <div className="   w-full bg-deepBlack text-white">
        <ul
          className={` -mt-3 py-3 lg:items-center transition-all duration-500 ease-in lg:hidden  ${
            !isMenuOpen ? "block" : "hidden"
          }  `}
        >
          {navData.map((item) => (
            <li
              style={{ borderBottom: "2px solid white", transition: "all 3s" }}
              className="  list-none mb-3 border-b-2  text-xl text-center"
            >
              <Link
                onClick={() => setIsMenuOpen(false)}
                to={item.link}
                className="no-underline text-grey
            hover:text-gray-400 duration-500  text-white"
              >
                {" "}
                {item.name}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppHeader;
