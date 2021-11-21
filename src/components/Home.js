import React from "react";
import footer from '../images/bg.gif';
import home from '../images/home.png';
import artists from '../images/artists.png';
import shop from '../images/shop.png';
import tour from '../images/tour.png';
import connect from '../images/connect.png';

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="wrap">
            <div className="navbar">
                <div className="toplink">
                    <Link id="homelink" to="/home" className="link"><img src={home} alt="nav" /></Link>
                    <Link to="/artists" className="link"><img src={artists} alt="nav" /></Link>
                    <Link to="/shop" className="link"><img src={shop} alt="nav" /></Link>
                    <Link to="/tour" className="link"><img src={tour} alt="nav" /></Link>
                    <Link to="/connect" className="link"><img src={connect} alt="nav" /></Link>
                </div>
            </div>
            <main className="content">
                <div className="main-content">
                    <div className="flex">
                        <div className="flexinner">
                            <div className="fleximg">
                            </div>
                        </div>
                    </div>
                    <img className="flash" src={footer} alt="footer" />
                </div>
            </main>
        </div>
    )
}

export default Home;