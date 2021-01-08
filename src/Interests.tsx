import {makeStyles} from "@material-ui/styles";
import {
    Button,
    Chip,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Theme
} from "@material-ui/core";
import {useState} from "react";

interface Interest {
    readonly label: string;

    readonly description: string;
}

interface InterestDialogProps {
    readonly interest: Interest;

    onClose(): void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
            marginTop: theme.spacing(2)
        }
    }),
);

const InterestDialog = (props: InterestDialogProps) => {
    const {interest, onClose} = props;

    return (
        <Dialog open={true} onClose={onClose} fullWidth>
            <DialogTitle>{interest.label}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {interest.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>
                    Lukk
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default function Interests() {
    const classes = useStyles();

    const [interest, setInterest] = useState<Interest | undefined>();

    return (
        <>
            <div className={classes.root}>
                {interests.map((interest, index) => (
                    <Chip key={index} label={interest.label} variant="outlined"
                          onClick={() => setInterest(interest)} clickable/>
                ))}
            </div>
            {/* Dialog for å vise detaljer om interessene */}
            {interest && <InterestDialog interest={interest} onClose={() => setInterest(undefined)}/>}
        </>
    )
}

// Mine interesser
export const interests: Interest[] = [
    {
        label: "Anime",
        description: "Jeg liker anime fordi det er noe jeg har til felles med mange av vennene mine. Det er så mye å snakke om og jeg synes det er bedre enn ekte serier."
    },
    {
        label: "Barn",
        description: "Ingen kommentar."
    },
    {
        label: "Dyr",
        description: "Jeg liker dyr fordi mange av dem er veldig søte og jeg liker hvordan de tenker i forhold til mennesker."
    },
    {
        label: "Gaming",
        description: "Jeg liker gaming fordi det er noe jeg har vokst opp med og som aldri blir kjedelig. Det er alltid veldig gøy og hvis jeg er trist så gir det meg noe annent å tenkte på."
    },
    {
        label: "Hentai",
        description: "Jeg liker hentai fordi det hjalp meg når jeg trengte det mest."
    },
    {
        label: "Manga",
        description: "Jeg liker manga fordi det gjør sånn at jeg kan vite ting om anime før det kommer ut sånn at jeg vet mer enn de som bare ser på anime. Det er også veldig mange serier som bare er manga som er veldig bra som jeg liker også."
    }
];