import React from "react";
import NavListItem from "./NavListItem";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Playlists() {
    const userPlaylists = Array.from(
        useSelector((state) => state.albumReducer.userPlaylists)
    );

    return (
        <div className="mt-4">
            <h6
                className="d-flex justify-content-start ml-4 mb-3 pl-3 font-weight-bold"
                style={{ color: "#aeaeae" }}
            >
                PLAYLISTS
            </h6>
            <NavListItem Icon={AddIcon} title="Create Playlist" />
            <NavListItem Icon={FavoriteIcon} title="Liked Songs" />
            <hr
                className="ml-5 mr-4"
                style={{
                    backgroundColor: "#141414",
                    height: 1,
                }}
            />
            {/* User Playlists */}
            {userPlaylists ? (
                userPlaylists.map((element, index) => {
                    return (
                        <Link to="/playlist" key={index}>
                            <div
                                className="d-flex justify-content-start ml-5"
                                style={{ color: "#aeaeae" }}
                            >
                                {element.name}
                            </div>
                        </Link>
                    );
                })
            ) : (
                <p>null</p>
            )}
        </div>
    );
}

export default Playlists;
