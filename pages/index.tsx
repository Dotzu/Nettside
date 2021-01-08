import Cat from "../src/Cat";
import Description from "../src/Description";
import Waifu from "../src/Waifu";
import Interests from "../src/Interests";
import React from "react";

import {Container, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";

// "CSS"
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // Stylen for titlen
        title: {
            marginTop: theme.spacing(8)
        },
        // Stylen for beskrivelsen
        description: {
            marginTop: theme.spacing(2)
        }
    })
)

// Hovedsiden
export default function Index() {
    const classes = useStyles();

    return (
        <Container fixed>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column">
                <Grid item className={classes.title}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Nicholas sin hjemmeside
                    </Typography>
                </Grid>
                <Grid item>
                    <Description/>
                </Grid>
                <Grid item>
                    <Interests/>
                </Grid>
                <Grid item>
                    <Waifu/>
                </Grid>
                <Grid item>
                    <Cat/>
                </Grid>
            </Grid>
        </Container>
    );
}
