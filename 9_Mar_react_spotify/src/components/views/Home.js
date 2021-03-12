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
    addCurrentSong,
    addCurrentImageUrl,
    addCurrentArtist,
} from "./../../redux/currentlyPlaying/currentlyPlayingActions.js";
// import Footer from "../ui/footer/Footer2.js";
import Footer from "../ui/footer/Footer.js";

function Home(props) {
    const { token, spotify } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            spotify.getMe().then((user) => {
                // console.log(`user = ${JSON.stringify(user)}`);
                dispatch(addUserInfo(user.display_name));
            });

            spotify.getUserPlaylists().then((playlists) => {
                // console.log(`playlists = ${JSON.stringify(playlists.items)}`);
                dispatch(addUserPlaylists(playlists.items));
            });

            spotify
                .getMyCurrentPlayingTrack()
                .then((track) => {
                    console.log(`API track = ${JSON.stringify(track)}`);
                    if (track !== {}) {
                        const currentSong = track.item.name;
                        const currentArtist = track.item.artists;
                        const currentImageUrl = track.item.album.images[2].url;
                        console.log(`STATE currentSong = ${currentSong}`);
                        console.log(
                            `STATE currentArtists = ${JSON.stringify(
                                currentArtist
                            )}`
                        );
                        console.log(
                            `STATE currentImageUrl = ${currentImageUrl}`
                        );
                        dispatch(addCurrentSong(currentSong));
                        dispatch(addCurrentImageUrl(currentImageUrl));
                        dispatch(addCurrentArtist(currentArtist));
                    }
                })
                .catch((error) => {
                    console.log(
                        `spotify.getMyCurrentPlayingTrack() error: ${error}`
                    );
                });

            spotify.getMyRecentlyPlayedTracks({ limit: 6 }).then((releases) => {
                // console.log(
                //     `Recently Played = ${JSON.stringify(
                //         releases.items[0].track.album.name
                //     )}`
                // );
                dispatch(addRecentlyPlayed(releases.items));
            });

            spotify.getNewReleases({ limit: 6 }).then((releases) => {
                // console.log(
                //     `New Releases = ${JSON.stringify(releases.albums.items)}`
                // );
                dispatch(addNewReleases(releases.albums.items));
            });
        }

        // console.log("token = " + token);
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
