import React from 'react'
import { Link } from 'react-router-dom'
import home from '../images/home_white.png';
import artists from '../images/artists_white.png';
import shop from '../images/shop_white.png';
import tour from '../images/tour_white.png';
import connect from '../images/connect_white.png';
import sb from '../images/sb.png';
import suicideboys from '../images/suicideboys.png'
import ramirez from '../images/rvmirxz.png'
import ramirezz from '../images/rxmirez.png';
import foulplay from '../images/foulplay_white.png'
import foul from '../images/fouplay.png';
import max from '../images/maxbeck.png'
import maxx from '../images/max.png'
import tenshi from '../images/tenshi.png'
import crystalmeth from '../images/crystalmeth.png'

const Artists = () => {
    return (
        <div id="artists-page">
            <div className="navbar">
                <div className="toplink">
                    <Link to="/home" className="link"><img src={home} alt="nav" /></Link>
                    <Link id="artistslink" to="/artists" className="link"><img src={artists} alt="nav" /></Link>
                    <Link to="/shop" className="link"><img src={shop} alt="nav" /></Link>
                    <Link to="/tour" className="link"><img src={tour} alt="nav" /></Link>
                    <Link to="/connect" className="link"><img src={connect} alt="nav" /></Link>
                </div>
            </div>
            <div id="five-content">
                <div className="five-content">
                    <div className="artistflex">
                        <a href="https://g59records.com/home" target="_blank">
                            <div className="image-holder">
                                <div className="artist-image">
                                    <img src={sb} />
                                </div>
                                <img className="arttext" src={suicideboys} /> 
                            </div>
                        </a>
                        <a href="https://soundcloud.com/ramirez_187" target="_blank">
                            <div className="image-holder">
                                <div className="artist-image">
                                <img src={ramirezz} />
                                </div>
                                <img className="arttext" src={ramirez} /> 
                            </div>
                        </a>
                        <a href="https://shop.foulplay.co/" target="_blank">
                            <div className="image-holder">
                                <div className="artist-image">
                                <img src={foul} />
                                </div>
                                <img className="arttext" src={foulplay} /> 
                            </div>
                        </a>
                        <a href="https://www.youtube.com/channel/UCbG3t_mFizethmdPbdgsDdw/videos" target="_blank">
                            <div className="image-holder">
                                <div className="artist-image">
                                    <img src={maxx} />
                                </div>
                                <img className="arttext" src={max} /> 
                            </div>
                        </a>
                        <a href="https://soundcloud.com/crystalmethg59" target="_blank">
                            <div className="image-holder">
                                <div className="artist-image">
                                    <img src={tenshi} />
                                </div>
                                <img className="arttext" src={crystalmeth} /> 
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists