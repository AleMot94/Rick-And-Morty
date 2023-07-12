//import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import {  createTheme } from "@mui/material";
/* type ThemeProp = {
    children: JSX.Element
} */

enum themePallet {
    FONT_GLOBAL = "Source Code Pro",
    BG = "#12181B",
    LIME = "#C8FA5F"
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
        }
    }
    
})



/* export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {


    return <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
    } */