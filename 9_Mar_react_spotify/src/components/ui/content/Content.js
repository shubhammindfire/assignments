import React from "react";
import AlbumCardList from "./AlbumCardList.js";
import TopUserProfile from "./TopUserProfile.js";

function Content() {
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(to bottom, #181005, #121212)",
            }}
        >
            <TopUserProfile />
            <AlbumCardList />
        </div>
    );
}

export default Content;
