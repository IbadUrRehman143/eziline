import React from "react";
import "../css/header.css";

export function Header() {
    return (
        <div className="header">
            <h1><span>M</span>odern <br />Innovative Architecture</h1>
            <p>From as low as $20 A small river named Duden flows by their place and <br /> supplies it with the
                necessary
                regelialia.</p>
            <div className="center">
                <button className="btn"><a href="#">Explore Project</a></button>
                <a href="#"><img src="../images/play_2.png" alt="" /></a>
                <h3>Watch Our Video</h3>

            </div>
        </div>
    )
}