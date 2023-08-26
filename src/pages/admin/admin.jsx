import React from 'react';
import Contact from '../contact/contact';
import { Route, Routes, Link } from 'react-router-dom';
import Dashborad from './pages/dasboard/Dashborad';
import Footer from './../../components/footer/footer';

function Admin(props) {
    return (
        <div className='flex' style={{maxHeight:'100vh'}}>
          <div className='hidden md:block'>
              Goto      
            <Link to='/admin/contact'>dashbord</Link>

          </div>
         <div style={{maxHeight:'100vh', overflowY:'scroll'}} className='flex-1'>
          icon
          <Routes>
              <Route path='/contact' element={ <Contact/>}/>
              <Route path='/' element={ <Dashborad/>}/>
              
          </Routes>
          <Footer/>
         </div>

         
      






        </div>
    );
}

export default Admin;