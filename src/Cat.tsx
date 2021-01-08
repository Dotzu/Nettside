import Image from "next/image";

import {makeStyles} from "@material-ui/styles";

import {createStyles, Grid, Link, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(4)
        },
    }),
);

export default function Waifu() {
    const classes = useStyles();

    return (
        <Grid container direction="row-reverse" justifyContent="center" spacing={4} className={classes.root}>
            <Grid item>
                <Image src="/images/cat.png" width={300} height={300}/>
            </Grid>
            {/* Dette gjør som at nettsiden er responsive */}
            <Grid item xs={12} md={5} lg={6}>
                <Typography variant="h6" gutterBottom>
                    Katter
                </Typography>
                <Typography>
                    Jeg har to katter, en som heter Kattelen/bolla og en som heter Paris. Jeg blir også kåt av de. Paris er 3 og Kattelen er 13.
                </Typography>
            </Grid>
        </Grid>
    )
}