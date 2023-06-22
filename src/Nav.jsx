import React from 'react';
import { Link } from "react-router-dom";


const Nav = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-ight">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
               
               
                    <Link className="nav-link" to="/GroupedTeamMembers">Teams</Link>
                </li>
                <li className="nav-item  ">
                    <h5 className=" font-monospace font-weight-lighter text-secondary Name" >Harshil Patel</h5>
                </li>
        

            </ul>
        </nav>
    )
}
export default Nav