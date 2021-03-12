import React from "react";
import {
    PlayCircleOutline,
    SkipPrevious,
    SkipNext,
    Shuffle,
    Repeat,
} from "@material-ui/icons";

function Player() {
    return (
        <div className="p-2">
            <Shuffle
                className="mx-2"
                style={{ fontSize: "20px", color: "#aeaeae" }}
            />
            <SkipPrevious className="mx-2" style={{ fontSize: "25px" }} />
            <PlayCircleOutline className="mx-2" style={{ fontSize: "40px" }} />
            <SkipNext className="mx-2" style={{ fontSize: "25px" }} />
            <Repeat
                className="mx-2"
                style={{ fontSize: "20px", color: "#aeaeae" }}
            />
        </div>
    );
}

export default Player;
