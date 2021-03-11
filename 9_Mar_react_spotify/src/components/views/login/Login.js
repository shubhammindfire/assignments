import React from "react";
import "./Login.css";
import { loginUrl } from "../../spotify/spotify.js";
import Spotify_Logo from "./../../../assets/Spotify_Logo.png";
import { Button } from "reactstrap";

function Login() {
    return (
        <div className="login">
            <img src={Spotify_Logo} alt="Spotify logo" />
            <Button
                color="success"
                className="p-3 rounded-pill font-weight-bold"
                href={loginUrl}
            >
                LOGIN WITH SPOTIFY
            </Button>
        </div>
    );
}

export default Login;
