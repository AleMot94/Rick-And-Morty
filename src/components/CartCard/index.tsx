import React from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useAppDispatch } from "../../redux/hooks"
import { removeToCart } from "../../redux/slices/cart.slice"

type CardProps = {
    id: string | number,
    img: string,
    name: string,
}

export const CartCard: React.FC<CardProps> = ({id, img, name}) =>{

    const dispatch = useAppDispatch()

    const handleRemoveToCart = () => {
        dispatch(
            removeToCart({id})
        )
    }
    
    return(
        <Box>
            <Grid container columnSpacing={2} sx={{mb:2, pr:2}}>
                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                        <img src={img} style={{width: "70%", borderRadius: "0.5em"}}/>
                    </Grid>
                    <Grid item sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between"}}>
                        <Typography variant="h5" sx={{mt:2}}>{name}</Typography>
                        <Button color="error" variant="contained" onClick={handleRemoveToCart} sx={{mb:4}}>
                            Eliminar
                        </Button>
                    </Grid>
            </Grid>
       </Box>
       
    )
}