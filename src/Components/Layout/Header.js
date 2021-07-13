import React from "react";

//Icons
import { TiStar } from "react-icons/ti"

//Content
import Raptor from "../Content/logo.png"

const Header = () => {
    return(
        <>
            <header className="container-fluid p-4" style={{borderTop: "5px solid maroon", borderBottom: "2px solid maroon", height:200, backgroundColor: "#bf945d"}}>
                <h1 className="text-center">
                    <TiStar style={{color: "maroon"}} />
                    Raptor
                    <img src={Raptor} className="px-3 d-none d-md-inline" alt="logo" />
                    House
                    <TiStar style={{color: "maroon"}} />
                </h1>
            </header>
        </>
    );
};

export default Header;