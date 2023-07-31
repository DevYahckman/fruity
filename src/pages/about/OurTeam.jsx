import React from "react";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import { SocialButton } from "../../utils/buttons";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function OurTeam(props) {
  const teamData = [
    {
      bg: team1,
      name: "John Doe",
      job: "Farmer",
      twitterLink: "#",
      fbLink: "#",
      instaLink: "#",
    },
    {
      bg: team2,
      name: "Lola Smith",
      job: "Farmer",
      twitterLink: "#",
      fbLink: "#",
      instaLink: "#",
    },
    {
      bg: team3,
      name: "Will Smith",
      job: "Farmer",
      twitterLink: "#",
      fbLink: "#",
      instaLink: "#",
    },
  ];

  return (
 
    <div
      className=" p-5 md:p-10 lg:p-20 h-auto gap-4 grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 text-center  "
    >
     {teamData.map((item,i)=>(

      <div className="">
        <div
          className="h-4/5 bg-top align-bottom p-4 bg-cover rounded"
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <Link to={item.fbLink}>
            <FaFacebookF
              style={{ borderRadius: "100%", marginTop: "27.5rem" }}
              className=" hover:bg-black hover:text-primary 
             font-semibold mr-4    bg-primary text-white p-2"
            />
          </Link>
          <Link to={item.twitterLink}>
            <FaTwitter
              style={{ borderRadius: "100%", marginTop: "27.5rem" }}
              className=" hover:bg-black hover:text-primary 
             font-semibold mr-4  bg-primary text-white p-2"
            />
          </Link>
          <Link to={item.instaLink}>
            <FaInstagram
              style={{ borderRadius: "100%", marginTop: "27.5rem" }}
              className=" hover:bg-black hover:text-primary 
             font-semibold mr-4  bg-primary text-white p-2"
            />
          </Link>
        </div>
        <p className="-mt-1  font-bold text-2xl">{item.name}</p>
        <p className=" font-bold leading-none text-lightColor text-xl">
          {" "}
          {item.job}
        </p>
      </div>
     ))}
    

      {/* <div>1</div>
      <div>1</div> */}
      {/* our team */}

      {/* < SocialButton/> */}
    </div>
  );
}

export default OurTeam;
