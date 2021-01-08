import Image from "next/image";

import {makeStyles} from "@material-ui/styles";

import {createStyles, Grid, Link, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(8)
        }
    }),
);

export default function Waifu() {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="center" spacing={4} className={classes.root}>
            <Grid item>
                <Image src="/images/felix.png" width={300} height={300}/>
            </Grid>
            {/* Dette gjør som at nettsiden er responsive */}
            <Grid item xs={12} md={5} lg={6}>
                <Typography variant="h6" gutterBottom>
                    Trap som jeg elsker
                </Typography>
                <Typography>
                    Jeg elsker Felix. Han kommer fra animen&nbsp;
                    <Link href="https://anilist.co/anime/21355/ReZERO-Starting-Life-in-Another-World/" target="_blank">
                        Re:ZERO Starting Life in Another World.
                    </Link>&nbsp;
                    Det er min favoritt anime og ja, jeg blir kåt av det. Jeg liker også en annen jente fra denne animen, som heter&nbsp;
                    <Link href="https://anilist.co/character/141858/Petra-Leyte" target="_blank">
                        Petra.
                    </Link>&nbsp;
                    Hun er 12 år.
                </Typography>
            </Grid>
        </Grid>
    )
}