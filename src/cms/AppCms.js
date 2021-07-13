import React, { useState, useEffect } from "react";

//Router
import { Route } from "react-router-dom"


//Layout
import NavCms from "./components/layout/NavCms";
import FooterCms from "./components/layout/FooterCms";

//CMS Components
import ListView from "./components/ListView";
import HomeCms from "./components/HomeCms";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";

//Category
import EditCategory from "./components/Category/EditCategory"
import CreateCategory from "./components/Category/CreateCategory";

//Slider
import CreateSlider from "./components/Slider/CreateSlider"
import EditSlider from "./components/Slider/EditSlider"

//Message
import EditMessage from "./components/Messages/EditMessage";
import CreateMessage from "./components/Messages/CreateMessage";

//Context
import { getAll } from "../Context/Context";



const AppCms = () => {

    const [products, setProdcts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sliders, setSliders] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getAll("products").then(response => setProdcts(response));
        getAll("categories").then(response => setCategories(response));
        getAll("sliders").then(response => setSliders(response));
        getAll("messages").then(response => setMessages(response));
    }, [])

    return (
        <>
            <NavCms />
            <main className="container p-3 bg-light" style={{ minHeight: 550 }}>
                <Route exact path="/cms" component={HomeCms} />

                {/* Products */}
                <Route path="/cms/products" render={() => (
                    <ListView items={products} setState={setProdcts} title="products" />
                )} />

                <Route path="/cms/editproducts/:id" render={(props) => (
                    <EditProduct products={products} setState={setProdcts} id={props.match.params.id} />
                )} />

                <Route path="/cms/createproducts/" render={() => (
                    <CreateProduct setState={setProdcts} />
                )} />

                {/* Categories */}
                <Route path="/cms/categories" render={() => (
                    <ListView items={categories} setState={setCategories} title="categories" />
                )} />

                <Route path="/cms/editcategories/:id" render={(props) => (
                    <EditCategory categories={categories} setState={setCategories} id={props.match.params.id} />
                )} />

                <Route path="/cms/createcategories/" render={() => (
                    <CreateCategory setState={setCategories} />
                )} />

                {/* Slider */}
                <Route path="/cms/slider" render={() => (
                    <ListView items={sliders} setState={setSliders} title="sliders" />
                )} />

                <Route path="/cms/editsliders/:id" render={(props) => (
                    <EditSlider sliders={sliders} setState={setSliders} id={props.match.params.id} />
                )} />

                <Route path="/cms/createsliders/" render={() => (
                    <CreateSlider setState={setSliders} />
                )} />

                {/* Messages */}
                <Route path="/cms/messages" render={() => (
                    <ListView items={messages} setState={setMessages} title="messages" />
                )} />

                <Route path="/cms/editmessages/:id" render={(props) => (
                    <EditMessage messages={messages} setState={setMessages} id={props.match.params.id} />
                )} />

                <Route path="/cms/createmessages/" render={() => (
                    <CreateMessage setState={setMessages} />
                )} />


            </main>
            <FooterCms />
        </>
    )
}

export default AppCms;