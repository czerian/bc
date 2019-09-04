import React from 'react'
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="nav">
            <li>
            <NavLink exact to="/">
                Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/niro">Niro</NavLink>
            </li>
            <li>
            <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
            <NavLink to="/my-resume">My Resume</NavLink>
            </li>
            <li>
            <NavLink to="/contact-me">Contact Me</NavLink>
            </li>
            <li>
            <NavLink to="/dummy">404</NavLink>
            </li>
        </ul>
        </div>
    )
}

export default Navigation;
