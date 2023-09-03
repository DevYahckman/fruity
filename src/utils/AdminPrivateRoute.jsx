import React from 'react';
import { useState } from 'react';
import {  Navigate, Outlet } from 'react-router-dom';


function AdminPrivateRoute({user}) {
    // const [user, setUser] = useState(true)
    return (
        <div>
            {user ? <Outlet/> : <Navigate to={'/adminLogin'} />}
        </div>
    );
}

export default AdminPrivateRoute;