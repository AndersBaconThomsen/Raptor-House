import React from "react";

import { Link } from "react-router-dom"

import ListStart from "../Content/White-star.png"

const Nav = () => {
    return(
        <>
            <nav className="container-fluid" style={{backgroundColor: "#2d2d2d", height: 25}}> 
                <div className="container">
                    <ul className="m-0" style={{listStyleImage: `url(${ListStart})`}}>
                        <li><Link className="text-decoration-none text-white" to="/">Home</Link></li>
                        <li><Link className="text-decoration-none text-white" to="/Menu">Menu</Link></li>
                        <li><Link className="text-decoration-none text-white" to="/Profile">Profil</Link></li>
                        <li><Link className="text-decoration-none text-white" to="/Contact">Kontakt</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Nav;
