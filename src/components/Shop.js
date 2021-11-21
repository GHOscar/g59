import React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home_white.png';
import artists from '../images/artists_white.png';
import shop from '../images/shop_white.png';
import tour from '../images/tour_white.png';
import connect from '../images/connect_white.png';
import merch from '../images/merch_white.png';
import tshirt from '../images/merch_icon2.png';
import cd from '../images/music_icon2.png';
import music from '../images/music_white.png'

const Shop = () => {
    return (
        <div id="shop-page">
            
            <div className="navbar">
                <div className="toplink">
                    <Link to="/home" className="link"><img src={home} alt="nav" /></Link>
                    <Link to="/artists" className="link"><img src={artists} alt="nav" /></Link>
                    <Link id="shoplink" to="/shop" className="link"><img src={shop} alt="nav" /></Link>
                    <Link to="/tour" className="link"><img src={tour} alt="nav" /></Link>
                    <Link to="/connect" className="link"><img src={connect} alt="nav" /></Link>
                </div>
            </div>
            <div className="page-div">
                <div className="page-div-content">
                    <div className="shop-flex">
                        <a href="https://g59recordsmerchandise.com/">
                            <div className="merch-holder">
                            <img src={tshirt} className="shoppic" />
                            <img src={merch} className="shoptext" />
                            </div>
                        </a>
                        <a href="https://open.spotify.com/artist/1VPmR4DJC1PlOtd0IADAO0">
                            <div className="merch-holder">
                            <img src={cd} className="shoppic" />
                            <img src={music} className="shoptext" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;
