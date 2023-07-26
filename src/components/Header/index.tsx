import React from "react"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

type HeaderProps = {
    title: string,
    description: string,
    element?: React.ReactNode | null,
}

export const HeaderComponent: React.FC<HeaderProps> = ({title, description, element}) => {
    return(
        <div>
            <Box sx={{ width: "100%", height: "250px"}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{height: "100%"}}>
                        <Grid 
                            item xs={12}
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{height: "100%"}}>
                                <Grid item>
                                    <Typography variant="h2">{title}</Typography>
                                </Grid>
                                <Grid item sx={{mt:2}}>
                                    <Typography>{description}</Typography>
                                </Grid>
                                {element !== undefined && (<Grid item sx={{mt:4}}>{element}</Grid>)}
                        </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    )
}