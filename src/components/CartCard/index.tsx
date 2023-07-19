import React from "react"
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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
        <Box >
            <Card sx={{mx: 5, my: 2}}>
                <CardMedia
                    title={name}
                    image={img}
                    component="img"
                    height="160px"
                />
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="error" onClick={handleRemoveToCart}>
                        Eliminar
                    </Button>
                </CardActions>
            </Card>
        </Box>
        
    )
}