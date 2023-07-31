import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

export function CommonButton({ link, name, icon }) {
  return (
    <Link
      to={link}
      className="hover:bg-black hover:text-primary font-semibold mr-10 rounded-full bg-primary text-white py-3 px-7 no-underline "
    >
      {icon} {name}
    </Link>
  );
}

// export function SocialButton({ link, name, icon }) {
//   return (
//     <Link to={link} className=" no-underline ">
//       <FaFacebook
//         style={{ borderRadius: "100%" }}
//         className=" hover:bg-black hover:text-primary 
//    font-semibold mr-10  bg-primary text-white p-2 "
//       />
//     </Link>
//   );
// }
