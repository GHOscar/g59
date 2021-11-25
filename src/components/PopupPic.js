import React from 'react'
import popup from '../images/window.png'

const PopupPic = () => {

    const randomPos = {
        bottom: Math.floor(Math.random() * 1337) ,
        top: Math.floor(Math.random() * 1337) ,
        right: Math.floor(Math.random() * 1337) ,
        left: Math.floor(Math.random() * 1337) 
    }

    return (
        <> 
        <img className="randompic" src={popup} style={randomPos} />
        </>
    )
}

export default PopupPic
