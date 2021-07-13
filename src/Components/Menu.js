import React, { useEffect, useState } from "react";
import { getAll } from "../Context/Context";
import { Link } from "react-router-dom"

const Menu = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAll("categories").then(response => setCategories(response));
    }, [])

    return(
        <>
            <section className="p-3" style={{background: "#fff"}}>
                <h2 className="" style={{color: "maroon"}}>Menu</h2>
                <div className="row">
                    <div className="offset-lg-3 col-12 col-lg-6">
                        <article className="row">
                            {
                                categories?.map((ele) => (
                                    <div key={ele?.id} className="col-md-6">
                                        <Link style={{textDecoration: "none"}} to={`/Menu/${ele?.id}`} >
                                        <div className="p-3" style={{ marginBottom: 30, background: "maroon"}}>
                                            <img alt={ele?.title} src={`data:image/png;base64,${ele?.image}`} className="img-fluid w-100 d-block" />
                                            <p className="text-center text-white py-1 m-0" style={{fontWeight: "bold"}}>{ele.title}</p>
                                        </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Menu;