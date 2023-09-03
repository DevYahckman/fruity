import React from "react";
import { FaMoneyCheck, FaUserAlt } from "react-icons/fa";
import styles from "./dashbord.module.scss";
function Dashborad(props) {
  const colore = "deepBlack";


  const cardData = [
    {
        title:'Sales Today',
        amount:'$53k',
        perc: '55%',
        time:'Than yesterday',
       icon: <FaMoneyCheck className={`py-3 px-4 rounded-md bg-${colore}`} color={"white"} size={30}/>
       
    },
    {
        title:'Total Sales',
        amount:'$53k',
        perc: '55%',
        time:'Than lastweek',
        icon: <FaMoneyCheck className={`py-3 px-4 rounded-md bg-${colore}`} color={"white"} size={30}/>
    },
    {
        title:'Toal User',
        amount:'2300',
        perc: '5%',
        time:'Than last Month',
        icon: <FaUserAlt className={`py-3 px-4 rounded-md `} style={{backgroundColor:'#d81b60'}} color={"white"} size={30}/>
  },
];
  return (
    <div className="p-5 md:p-9 lg:p-0">
      {/* Sales today
            Total Sales 
            Total Users */}
      <p className="font-bold">Dashboard</p>
      <div className="grid mt-9 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
            cardData.map((item,i)=>(

        <div className="rounded-lg p-2 bg-white shadow-sm">
          <div className={`  flex justify-between`}>
            <span className="-mt-7">
             {item.icon}
            </span>{" "}
            <p className="text-right -mt-2">
              <p>{item.title}</p>
              <p className="font-bold text-2xl leading-none">{item.amount}</p>
            </p>
          </div>
          <div className={styles.line}></div>
          <p className='font-bold text-red-500 '>{item.perc} <span className="font-semibold text-black">{item.time}</span> </p>
        </div>
            ))
        }
       
      </div>
    </div>
  );
}

export default Dashborad;
