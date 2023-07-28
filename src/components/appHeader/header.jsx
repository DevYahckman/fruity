import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss'
import {BiSearchAlt2} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
function AppHeader(props) {
    const [active,setActive]= useState([0])

    const handleLink=(index)=>{
        setActive(index)
    }
    const navData=[
        {
            name:'Home',
            link:'#',
            icon:""
        },
        {
            name:'About',
            link:'#',
            icon:""
        },
        {
            name:'News',
            link:'#',
            icon:""
        },
        {
            name:'Contact',
            link:'#',
            icon:""
        },
        {
            name:'SignUp',
            link:'#',
            icon:""
        },
    ]
    return (
        <div className='flex justify-between  p-4 lg:p-8 mx-4 md:mx-16'>
            <div className={styles.logo}>
                <Link to='/' className='text-2xl text-primary underline underline-offset-3' > Fruity</Link>
            </div>

            <div className={` hidden lg:flex space-x-8 invisible lg:visible`}>
                {navData.map((item,index)=>(

                <Link 
                onClick={()=>{setActive(index)}}
                style={{color: active== index && '#F28123'}}
                to={item.link} className='text-sm no-underline text-white hover:text-primary font-bold'>{item.name} </Link>
                ))}
            </div>
            <div className='space-x-4 lg:mt-0 mt-3'>
                <Link className='text-white text-3xl font-bold'>
                < BiSearchAlt2 />
                </Link>
                <Link className='text-deepBlack text-3xl font-bold bg-primary pt-2 px-2.5 py-0'>
                < GiHamburgerMenu />
                </Link>

               
            </div>
        </div>
    );
}

export default AppHeader;