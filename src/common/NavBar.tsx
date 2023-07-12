import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const NavBar: React.FC<{}> = () => {
    return(
        <Box>

            <AppBar >
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid 
                            container 
                            direction={"row"} 
                            justifyContent={"space-between"} 
                            alignItems={"center"}>
                                <Grid item>
                                    <Typography>otra cosa</Typography>
                                </Grid>
                                <Grid item>
                                    <Stack direction={"row"} spacing={3}>
                                        <Button variant='contained'>login</Button>
                                        <Button variant='outlined'>register</Button>
                                    </Stack>
                                    
                                </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>

        </Box>
    )
}