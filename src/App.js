import React from "react";
import "./App.css";


//Layout Components
import Header from "./Components/Layout/Header"
import Nav from "./Components/Layout/Nav";
import Footer from "./Components/Layout/Footer";

//Components
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import Map from "./Components/Map";
import MenuItem from "./Components/MenuItem";

//Router
import { Route } from "react-router-dom";





function App() {
  return (
    <>
        <div className="App">
          <Header />
          <Nav />
          <main className="container py-3" style={{backgroundColor: "#dbbd8b", minHeight: 600}}>
            <Route exact path="/" component={Home} />
            <Route path="/Menu/:id" component={MenuItem} />
            <Route exact path="/Menu" component={Menu} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Contact" component={Contact} />

            <Route path="/Map" component={Map} />
            
          </main>
          <Footer />
        </div>
    </>
  );
}

export default App;



