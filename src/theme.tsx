import {createMuiTheme} from '@material-ui/core/styles';
import {red} from "@material-ui/core/colors";

// Tema på nettsiden
// Farger, osv.
const theme = createMuiTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: red[400],
        },
        background: {
            default: "#1e1e1e",
            paper: "#222"
        },
        action: {
            focus: "transparent",
            focusOpacity: 0,
            selected: "rgba(0, 0, 0, 0.2)",
            selectedOpacity: 0.2
        }
    },
});

export default theme;
