import React from "react";

import { Link, useHistory } from "react-router-dom"

const NavCms = () => {

    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("user");
        history.push("/");
    };


    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/cms">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/cms">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cms/products">Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cms/categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cms/slider">Slider</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cms/messages">messages</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cms/Homes">Homes</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cms/Contects">Contacts</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavCms;