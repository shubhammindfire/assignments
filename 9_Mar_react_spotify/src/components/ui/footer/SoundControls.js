import React from "react";
import { PlaylistPlay, VolumeUp } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function SoundControls() {
    const SpotifySlider = withStyles({
        root: {
            color: "#52af77",
            height: 8,
        },
        thumb: {
            height: 0,
            width: 0,
            backgroundColor: "#fff",
            border: "0px solid currentColor",
            "&:focus, &:hover, &$active": {
                boxShadow: "inherit",
            },
        },
        active: {},
        track: {
            height: 6,
            borderRadius: 4,
        },
        rail: {
            height: 6,
            borderRadius: 4,
        },
    })(Slider);

    return (
        <div className="pr-3" style={{ width: "250px" }}>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay />
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
                <Grid item xs>
                    <SpotifySlider defaultValue={20} />
                </Grid>
            </Grid>
        </div>
    );
}

export default SoundControls;
