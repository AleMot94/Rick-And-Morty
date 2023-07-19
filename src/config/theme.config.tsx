//import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import {  createTheme } from "@mui/material";
/* type ThemeProp = {
    children: JSX.Element
} */

enum themePallet {
    FONT_GLOBAL = "Source Code Pro",
    BG = "#12181B",
    LIME = "#C8FA5F",
    // ALERT STYLES
    ERROR_MAIN = "F44336",
<<<<<<< HEAD
    BG_ERROR_MAIN = "rbga(244,67,54,0.1)"
=======
    BG_ERROR_MAIN = "rbga(244,67,54,0.1)",
    SUCCESS_MAIN = "#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
>>>>>>> version4
}

export const theme = createTheme({
    palette: {
        mode:"dark",
        background: {
            default: themePallet.BG,
        },
        primary: {
            main: themePallet.LIME,
        },
    },
    typography: {
        fontFamily: themePallet.FONT_GLOBAL
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none"
                }
            }
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: "0.8em",
                    fontSize: "1em"
                }
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePallet.ERROR_MAIN}`,
                    background: themePallet.BG_ERROR_MAIN,
<<<<<<< HEAD
=======
                },
                standardSuccess: {
                    border: `1px solid ${themePallet.SUCCESS_MAIN}`,
                    background: themePallet.BG_SUCCESS_MAIN,
>>>>>>> version4
                }
            }
        }
    
    }
})
<<<<<<< HEAD
=======

>>>>>>> version4
