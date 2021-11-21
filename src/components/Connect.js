import React from 'react'
import instagram from '../images/instagram.png';
import { Link } from 'react-router-dom';
import home from '../images/home_white.png';
import artists from '../images/artists_white.png';
import shop from '../images/shop_white.png';
import tour from '../images/tour_white.png';
import connect from '../images/connect_white.png';

const Connect = () => {
    return (
        <div id="connect-page">

            <div className="navbar">
                <div className="toplink">
                    <Link to="/home" className="link"><img src={home} alt="nav" /></Link>
                    <Link to="/artists" className="link"><img src={artists} alt="nav" /></Link>
                    <Link to="/shop" className="link"><img src={shop} alt="nav" /></Link>
                    <Link to="/tour" className="link"><img src={tour} alt="nav" /></Link>
                    <Link id="connectlink" to="/connect" className="link"><img src={connect} alt="nav" /></Link>
                </div>
            </div>
            <div className="connectflex">
            <h2 onClick={() => {
                window.location.href="https://g59records.com"
            }}>original website: g59records.com</h2>
            <p>this website made for a project but continued for fun</p>
            <div className="instagram">
                <a className="igpic" href="https://instagram.com/oscarjaansson" target="_blank">
                    <img src={instagram} alt="instagram logo" />
                </a>
                </div>
            </div>
            <footer>&copy;2021 Oscar Jansson</footer>
        </div>
    )
}

export default Connect
