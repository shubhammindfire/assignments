import React from "react";
import AlbumArt from "./AlbumArt.js";
import Player from "./Player.js";
import SoundControls from "./SoundControls.js";

function Footer() {
    return (
        <div
            className="d-flex justify-content-between align-items-center"
            style={{
                color: "white",
                height: "80px",
                position: "fixed",
                left: "0",
                bottom: "0",
                width: "100%",
                backgroundColor: "#181818",
                textAlign: "center",
            }}
        >
            <AlbumArt />
            <Player />
            <SoundControls />
        </div>
    );
}

export default Footer;
