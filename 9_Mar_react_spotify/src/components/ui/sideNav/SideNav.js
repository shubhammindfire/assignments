import React from "react";
import Spotify_Logo_White from "./../../../assets/Spotify_Logo_White.png";
import NavListItem from "./NavListItem.js";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import Playlists from "./Playlists.js";

function SideNav() {
    return (
        <div
            style={{
                position: "fixed",
            }}
        >
            <img
                className="mx-2 my-4"
                width="auto"
                height="50px"
                src={Spotify_Logo_White}
                alt="spotify_logo"
            />
            <NavListItem Icon={HomeIcon} title="Home" />
            <NavListItem Icon={SearchIcon} title="Search" />
            <NavListItem Icon={LibraryMusic} title="Your Library" />
            <Playlists />
        </div>
    );
}

export default SideNav;
