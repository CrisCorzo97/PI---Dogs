import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Landing.css';



export default function LandingPage() {

    return(
        <div className="containerLand">
            <div className="landing">
                <h1 className="h1Landing">Henry Dogs</h1>
                <h1 className="h1Landing">App</h1>
            </div>
            <div className="landing1">
                <h1 className="h1Landing1">Bienvenidos</h1>
                <Link to='/home'>
                    <button className="btnLanding">INGRESAR</button>
                </Link>
            </div>
        </div>
    )
}
