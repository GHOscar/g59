import React, { useEffect } from 'react'
import popup from '../images/window.png';


// popupDirection = [[ 'left', 'right' ], ['top', 'bottom']]
// popupArrayValues = [{
//     left: 219,
//     bottom: 1299,
// }]

const LandingPage = () => {
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
                {/* <div className="popups">
                    {[...Array(5)].map((x, i) =>
                    <img src={popup} key={i} />
                    )}

                </div> */}
            </div>
        </div>
    )
}

export default LandingPage