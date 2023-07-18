import React from "react"
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'


interface CartProps {
    open: boolean,
    handleOpenCart: () => void;
}

export const Cart: React.FC<CartProps> = ({open, handleOpenCart}) =>{


    return(
        <Drawer anchor={'right'} open={open}>
            <Box sx={{ width: '25em', p: 2 }}>
                <Stack direction="row">
                    <IconButton color="primary" onClick={() => handleOpenCart()}>
                        <CloseRoundedIcon />
                    </IconButton>
                    <Typography variant="h4" textAlign="center" sx={{flexGrow:1}}>Cart</Typography>
                </Stack>
                <Divider/>
            </Box> 
        </Drawer>
    )
} 