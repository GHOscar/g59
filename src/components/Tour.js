import React from 'react'
import { Link } from 'react-router-dom';
import home from '../images/home_white.png';
import artists from '../images/artists_white.png';
import shop from '../images/shop_white.png';
import tour from '../images/tour_white.png';
import connect from '../images/connect_white.png';


const Tour = () => {
    return (
        <div id="tour-page">
        <div className="navbar">
                <div className="toplink">
                    <Link to="/home" className="link"><img src={home} alt="nav" /></Link>
                    <Link to="/artists" className="link"><img src={artists} alt="nav" /></Link>
                    <Link to="/shop" className="link"><img src={shop} alt="nav" /></Link>
                    <Link id="tourlink" to="/tour" className="link"><img src={tour} alt="nav" /></Link>
                    <Link to="/connect" className="link"><img src={connect} alt="nav" /></Link>
                </div>
            </div>
            <h3 onClick={() => {
                window.location.href = 'https://g59records.com/tour'
            }}>Click HERE to see tours</h3>
        </div>
    )
}

export default Tour;