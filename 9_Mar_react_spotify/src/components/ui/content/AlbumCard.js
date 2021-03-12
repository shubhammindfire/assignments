import React from "react";
import { SPOTIFY_TYPES } from "../../spotify/spotify_types.js";
// import { Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";

function AlbumCard(props) {
    const { type, album } = props;
    let image_url = "",
        album_type = "",
        album_name = "",
        artist_name = "";

    if (type === SPOTIFY_TYPES.NEW_RELEASES) {
        image_url = capitalize(album.images[1].url);
        album_type = capitalize(album.album_type);
        album_name = capitalize(album.name);
        artist_name = capitalize(album.artists[0].name);
    } else if (type === SPOTIFY_TYPES.RECENTLY_PLAYED) {
        image_url = capitalize(album.track.album.images[1].url);
        album_type = capitalize(album.track.album.album_type);
        album_name = capitalize(album.track.name);
        album.track.album.artists.forEach((element) => {
            artist_name += `${element.name}, `;
        });
        artist_name = artist_name.replace(/,\s*$/, "");
        // artist_name = capitalize(album.artists[0].name);
    }

    function capitalize(st) {
        return st.charAt(0).toUpperCase() + st.slice(1);
    }
    return album ? (
        <div className="p-0 m-0">
            <div
                className="d-inline-block py-1 m-2 text-light"
                style={{
                    width: "200px",
                    height: "auto",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#141414",
                }}
            >
                <img
                    className="m-3"
                    src={image_url}
                    width="150px"
                    alt="album_image"
                />
                <p
                    className="px-3 font-weight-bold"
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "16px",
                    }}
                >
                    {album_name}
                </p>
                <div
                    className="font-weight-bold"
                    style={{
                        color: "#b3b3b3",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "14px",
                    }}
                >
                    {album_type}
                    {/* <div
                        style={{
                            display: "inline-block",
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "grey",
                            marginBottom: "2px",
                            marginLeft: "5px",
                            marginRight: "5px",
                        }}
                    ></div> */}
                    <p
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {artist_name}
                    </p>
                </div>
            </div>

            {/* <Card
                className="p-3 m-2"
                style={{ color: "white", backgroundColor: "#141414", maxWidth: "100%" }}
            >
                <img
                    src={album.images[1].url}
                    width="150px"
                    alt="album_image"
                />
                <CardBody>
                    <CardTitle tag="h5" style={{wordWrap: "break-word"}}>{album.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {capitalize(album.album_type)}
                        <div
                            className="small-dot"
                            style={{
                                display: "inline-block",
                                width: "5px",
                                height: "5px",
                                borderRadius: "50%",
                                background: "grey",
                                marginBottom: "2px",
                                marginLeft: "5px",
                                marginRight: "5px",
                            }}
                        ></div>
                        {capitalize(album.artists[0].name)}
                    </CardSubtitle>
                </CardBody>
            </Card> */}
        </div>
    ) : (
        <p>null</p>
    );
}

export default AlbumCard;
