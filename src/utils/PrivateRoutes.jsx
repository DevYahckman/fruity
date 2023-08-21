import React,{useEffect} from 'react';
import {  Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes({user}) {
 
    return (
        <div>
            {user? <Outlet/> : <Navigate to={'/login'} />}
        </div>
    );
}

export default PrivateRoutes;