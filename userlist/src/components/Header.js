import { useEffect, useState } from "react"
import React  from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./Header.css";


function Header() {
    const [activetab, setactivetab] = useState("Home");

    const location = useLocation();
    useEffect(()=>{
    if(location.pathname === '/'){
        setactivetab('Home')
    }
    else if (location.pathname === "/add"){
        setactivetab('AddUser')
    }

    },[location])
  return (
    <div className="header">

        <p className="logo">User List</p>
        <div className="header-right">

            <Link to= "/">
                <p className={`${activetab === 'Home'? "active" : ""}`} onClick = {()=>{
                    setactivetab('Home')
                }}>Home</p>
            </Link>

            <Link to= "/add">
                <p className={`${activetab === 'AddUser'? "active" : ""}`} onClick = {()=>{
                    setactivetab('Adduser')
                }}>Add user</p>
            </Link>
        </div>
    </div>
  )
}

export default Header