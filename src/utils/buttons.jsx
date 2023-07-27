import React from "react";
import { Link } from "react-router-dom";


export function CommonButton( {link, name, icon}) {
  return (
    <Link
      to={link}
      className="hover:bg-black hover:text-primary font-semibold mr-10 rounded-full bg-primary text-white  py-3 px-5 no-underline "
    >
     {icon} {name}
    </Link>
  );
}
