import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./components/views/Home.js";
import React, { useEffect, useState } from "react";
import Login from "./components/views/login/Login.js";
import { getTokenFromUrl } from "./components/spotify/spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlaylistDetail from "./components/views/PlaylistDetail.js";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);
        }
    }, [token]);

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <div className="App">
                            {token ? (
                                <Home spotify={spotify} token={token} />
                            ) : (
                                <Login />
                            )}
                        </div>
                    </Route>
                    <Route path="/playlist">
                        <PlaylistDetail spotify={spotify} token={token} />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
