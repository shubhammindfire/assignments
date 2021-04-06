import React from "react";
import { useSelector } from "react-redux";
import TopUserProfile from "./../TopUserProfile.js";
import "./playlistPage.css";

function PlaylistPage() {
    const userInfo = useSelector((state) => state.userReducer.userInfo);
    const userPlaylists = Array.from(
        useSelector((state) => state.albumReducer.userPlaylists)
    );

    const userPlaylist = Array.from(
        useSelector((state) => state.userPlaylistReducer.userPlaylist)
    );
    const userPlaylistImage = useSelector(
        (state) => state.userPlaylistReducer.userPlaylistImage
    );

    return (
        <div className="body">
            <TopUserProfile />
            <div className="playlistHeading">
                <img
                    className="playlistImage"
                    src={userPlaylistImage}
                    alt=""
                    width="250px"
                    height="auto"
                />
                <div className="plDetails">
                    <p id="pl">PLAYLIST</p>
                    <p id="plName">{userPlaylists[0].name}</p>
                    <div className="userrow">
                        <p id="username">{userInfo}</p>
                        <div className="dot"></div>
                        <p id="songsNumber">
                            {userPlaylists[0].tracks.total} songs
                        </p>
                    </div>
                </div>
            </div>
            {userPlaylist ? (
                userPlaylist.map((element) => {
                    return (
                        <div className="songRow">
                            <img
                                className="songRow_album"
                                src={element.track.album.images[2].url}
                                alt=""
                            />
                            <div className="songRow_info">
                                <h1>{element.track.name}</h1>
                                <p>
                                    {element.track.artists
                                        .map((artist) => artist.name)
                                        .join(", ")}{" "}
                                    - {element.track.album.name}
                                </p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>null</p>
            )}

            {/* <div>
                {userPlaylist ? (
                    userPlaylist.map((element) => {
                        return (
                            // {element.track.name} -{" "}
                            // {element.track.artists[0].name}
                            <div className="songRow">
                                <img
                                    className="songRow_album"
                                    src={element.track.album.images[2].url}
                                    alt=""
                                />
                                <div className="songRow_info">
                                    <h1>{element.track.name}</h1>
                                    <p>
                                        {element.track.artists
                                            .map((artist) => artist.name)
                                            .join(", ")}{" "}
                                        - {element.track.album.name}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>null</p>
                )}
            </div> */}
        </div>
    );
}

export default PlaylistPage;
