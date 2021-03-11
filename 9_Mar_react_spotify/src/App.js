import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./App.css";
import Home from "./components/views/Home.js";
import React, { useEffect, useState } from "react";
import Login from "./components/views/login/Login.js";
import { getTokenFromUrl } from "./components/spotify/spotify.js";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = getTokenFromUrl();
        console.log(`get token from url = ${JSON.stringify(hash)}`);
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);
        }
    }, [token]);

    return (
        <Provider store={store}>
            <div className="App">
                {token ? <Home spotify={spotify} token={token} /> : <Login />}
            </div>
        </Provider>
    );
}

export default App;
