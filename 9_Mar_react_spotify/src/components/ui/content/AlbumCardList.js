import React from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard.js";
import { SPOTIFY_TYPES } from "../../spotify/spotify_types.js";

function AlbumCardList() {
    const newReleases = Array.from(
        useSelector((state) => state.albumReducer.newReleases)
    );
    const recentlyPlayed = Array.from(
        useSelector((state) => state.albumReducer.recentlyPlayed)
    );

    return (
        <div>
            {/* New Releases */}
            <h2 className="text-light font-weight-bold text-left ml-4 mt-4">
                New Releases
            </h2>
            {newReleases ? (
                newReleases.map((element) => {
                    return (
                        <div
                            className="d-inline-block p-0 m-0"
                            key={element.name}
                        >
                            <AlbumCard
                                type={SPOTIFY_TYPES.NEW_RELEASES}
                                album={element}
                                key={element.name}
                            />
                        </div>
                    );
                })
            ) : (
                <p>null</p>
            )}
            {/* Recently Played */}
            <h2 className="text-light font-weight-bold text-left ml-4 mt-4">
                Recently Played
            </h2>
            {newReleases ? (
                recentlyPlayed.map((element) => {
                    return (
                        <div
                            className="d-inline-block p-0 m-0"
                            key={element.track.id}
                        >
                            <AlbumCard
                                type={SPOTIFY_TYPES.RECENTLY_PLAYED}
                                album={element}
                                key={element.track.name}
                            />
                        </div>
                    );
                })
            ) : (
                <p>null</p>
            )}
        </div>
    );
}

export default AlbumCardList;
