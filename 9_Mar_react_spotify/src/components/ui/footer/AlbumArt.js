import React from "react";
import { useSelector } from "react-redux";

function AlbumArt() {
    const currentSong = useSelector(
        (state) => state.currentlyPlayingReducer.currentSong
    );
    const currentImageUrl = useSelector(
        (state) => state.currentlyPlayingReducer.currentImageUrl
    );
    const currentArtist = Array.from(
        useSelector((state) => state.currentlyPlayingReducer.currentArtist)
    );

    let artists = "";

    currentArtist.forEach((element) => {
        artists += `${element.name}, `;
    });
    artists = artists.replace(/,\s*$/, "");

    return currentSong ? (
        <div>
            <div
                className="ml-3"
                style={{
                    flex: "0.3",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    maxWidth: "300px",
                }}
            >
                <img
                    src={currentImageUrl}
                    alt="album_art"
                    style={{
                        height: "60px",
                        width: "60px",
                        marginRight: "20px",
                        objectFit: "contain",
                    }}
                />
                <div className="mt-3 text-left">
                    <p
                        className="mb-0"
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "200px",
                        }}
                    >
                        {currentSong}
                    </p>
                    <p style={{ fontSize: "12px", color: "#aeaeae" }}>
                        {artists}
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <div style={{ width: "300px" }}></div>
    );
}

export default AlbumArt;
