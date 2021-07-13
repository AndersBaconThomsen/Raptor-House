import React, { useState, useEffect } from "react";

import Slider from "./Slider";

import { getAll } from "../Context/Context"

const Home = () => {

    const [slider, setSlider] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll("sliders").then(response => setSlider(response));
        getAll("products").then(response => setProducts(response.slice(0, 4)));
    }, [])

    return (
        <>
            <article className="row pb-3">
                <section className="col-md-9 d-none d-md-block">
                    <div className="whiteBorder">
                        <Slider slider={slider} />
                    </div>
                </section>
                <section className="col-md-3">
                    <div className="whiteBorder container-fluid p-0     " style={{ backgroundColor: "#fff" }}>
                        <section className="h-50 text-white p-1" style={{ backgroundColor: "maroon", height: "49%", marginBottom: "1%" }}>
                            <h4>Åbningstider:</h4>
                            bla bla bla
                        </section>
                        <section className=" text-white" style={{ backgroundColor: "maroon", height: "23%", marginTop: "1%", marginBottom: "1%" }}>
                            Menukort
                        </section>
                        <section className="text-white p-1" style={{ backgroundColor: "maroon", height: "24%", marginTop: "1%" }}>
                            Her finder du os
                        </section>
                    </div>
                </section>
            </article>

            <article className="row py-3" style={{ borderTop: "3px solid maroon", borderBottom: "3px solid maroon", backgroundColor: "#bf945d" }}>
                {
                    products?.map(item => (
                        <section key={item?.id} className="col-md-3">
                            <div className="whiteBorder text-center ratio ratio-4x3" style={{ backgroundColor: "white" }}>
                                <img src={`data:image/png;base64,${item?.image}`} alt={item?.title} className="img-fluid" />
                            </div>
                        </section>
                    ))
                }   
            </article>

            <article className="row pt-3">
                <section className="col-12">
                    <div className="whiteBorder text-white" style={{ backgroundColor: "maroon" }}>
                        <p>
                            Nam venenatis placerat turpis vel volutpat. In ac augue scelerisque, lobortis justo sed, pharetra ligula. Praesent feugiat aliquet sem eu posuere. Cras neque nibh, auctor eu tincidunt suscipit, hendrerit ut lectus. Nulla sit amet dapibus sem, a bibendum tortor. Duis congue facilisis metus, nec vulputate ligula cursus vel. Suspendisse potenti. Nulla cursus mattis metus, non finibus felis. Pellentesque porta felis nec pharetra consectetur.
                        </p>
                    </div>
                </section>
            </article>
        </>
    );
};

export default Home;