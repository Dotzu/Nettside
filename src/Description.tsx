import {Grid, Grow, Slide, Typography, Zoom} from "@material-ui/core";
import React from "react";

// Beskrivelse med kule animasjoner
export default function Description() {
    return (
        <Grid container direction="row">
            <Grid item>
                <Zoom in={true} timeout={500}>
                    <Typography variant="body1" component="p">
                        Hei jeg heter&nbsp;
                    </Typography>
                </Zoom>
            </Grid>
            <Grid item>
                <Grow in={true} timeout={{enter: 1000, exit: 1500}} style={{transformOrigin: "bottom"}}>
                    <Typography variant="body1" component="p" color="secondary">
                        Nicholas&nbsp;
                    </Typography>
                </Grow>
            </Grid>
            <Grid item>
                <Slide in={true} timeout={{enter: 1300, appear: 1450, exit: 1500}} direction="left">
                    <Typography variant="body1" component="p">
                        og jeg er 14 år og jeg må gå på skole.
                    </Typography>
                </Slide>
            </Grid>
        </Grid>
    )
}