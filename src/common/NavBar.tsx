import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { Cart } from './Cart'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Badge from '@mui/material/Badge'
import { useAppSelector } from '../redux/hooks'


export const NavBar: React.FC<{}> = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState<boolean>(false)
    const items = useAppSelector((state) => state.cartReducer)

    
    const handleOpenCart = () => {
        setOpen((state) => !state);
      };
    
    return(
        <Box>

            <AppBar position='sticky'>
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
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleOpenCart()}
                                        >
                                            <Badge color="error" badgeContent={items.length}>
                                                <AddShoppingCartIcon />
                                            </Badge>  
                                        </IconButton>
                                        <Button variant='contained' onClick={() => navigate("login")}>login</Button>
                                        <Button variant='outlined'>register</Button>
                                    </Stack>
                                    
                                </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <Cart open={open} handleOpenCart={handleOpenCart}/>

        </Box>
    )
}