import React, { useEffect } from "react";
import Content from "../ui/content/Content.js";
import SideNav from "../ui/sideNav/SideNav.js";
import { useDispatch } from "react-redux";
import {
    addNewReleases,
    addRecentlyPlayed,
    addUserPlaylists,
} from "./../../redux/album/albumActions.js";
import { addUserInfo } from "./../../redux/user/userActions.js";
import {
    addUserPlaylist,
    addUserPlaylistImage,
} from "./../../redux/userPlaylist/userPlaylistActions.js";
import {
    addCurrentSong,
    addCurrentImageUrl,
    addCurrentArtist,
} from "./../../redux/currentlyPlaying/currentlyPlayingActions.js";
import Footer from "../ui/footer/Footer.js";

function Home(props) {
    const { token, spotify } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            spotify.getMe().then((user) => {
                dispatch(addUserInfo(user.display_name));
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch(addUserPlaylists(playlists.items));
            });

            spotify
                .getPlaylistTracks("4LwZWlGYMpFibXEBera3Et")
                .then((tracks) => {
                    dispatch(addUserPlaylist(tracks.items));
                });

            spotify
                .getPlaylistCoverImage("4LwZWlGYMpFibXEBera3Et")
                .then((playlistImage) => {
                    dispatch(addUserPlaylistImage(playlistImage[1].url));
                });

            spotify
                .getMyCurrentPlayingTrack()
                .then((track) => {
                    if (track !== {}) {
                        const currentSong = track.item.name;
                        const currentArtist = track.item.artists;
                        const currentImageUrl = track.item.album.images[2].url;
                        dispatch(addCurrentSong(currentSong));
                        dispatch(addCurrentImageUrl(currentImageUrl));
                        dispatch(addCurrentArtist(currentArtist));
                    }
                })
                .catch((error) => {});

            spotify.getMyRecentlyPlayedTracks({ limit: 6 }).then((releases) => {
                dispatch(addRecentlyPlayed(releases.items));
            });

            spotify.getNewReleases({ limit: 6 }).then((releases) => {
                dispatch(addNewReleases(releases.albums.items));
            });
        }
    }, [dispatch, token, spotify]);

    return (
        <div>
            <div className="row">
                <div
                    className="col-2 p-0"
                    style={{ backgroundColor: "black", height: "120vh" }}
                >
                    <SideNav />
                </div>
                <div
                    className="col-10 p-0"
                    style={{ backgroundColor: "#121212", height: "100vh" }}
                >
                    <Content />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
