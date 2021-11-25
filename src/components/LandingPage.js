import React, { useEffect, useState } from 'react';
import PopupPic from './PopupPic';


// popupDirection = ['left', 'right', 'top', 'bottom']
// popupArrayValues = [{
//     top: Math.floor(Math.random() * 1000),
//     left: Math.floor(Math.random() * 1000),
//     right: Math.floor(Math.random() * 1000),
//     bottom: Math.floor(Math.random() * 1000),
// }]

const LandingPage = () => {

    // useState
    const [top, setTop] = useState(0)
    const [right, setRight] = useState(0)
    const [left, setLeft] = useState(0)
    const [bottom, setBottom] = useState(0)

    useEffect(() => {
        setBottom(Math.floor(Math.random() * 1000))
        setTop(Math.floor(Math.random() * 1000))
        setRight(Math.floor(Math.random() * 1000))
        setLeft(Math.floor(Math.random() * 1000))
    }, [])



    return (
        <div id="landing-page" onClick={() => {
            window.location.href = '/home'
        }}>
            <div className="bluescreen">
                <div className="flextext">
                    <div className="onetothree">
                        <h2 className="bstext">0x000000CE DRIVER_UNLOADED_WITHOUT_CANCELLING_PENDING_OPERATIONS</h2>
                        <h2 className="bstext">BSOD : Error 333 Registry Failure of operating system - Host</h2>
                        <h2 className="bstext">BLUE SCREEN ERROR 0x000000CE</h2>
                    </div>
                    <div className="blink">
                        <h2 className="continue">Press anywhere to continue</h2>
                    </div>
                </div>
                <div className="popups">
                {[...Array(15)].map((x, i) =><PopupPic top={top} left={left} right={right} bottom={bottom} key={i} />
  )}
                </div>
            </div>
        </div>
    )
}

export default LandingPage