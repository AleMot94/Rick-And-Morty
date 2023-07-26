import React from "react";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid'
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addToCart } from "../../redux/slices/cart.slice"
import { setItem } from "../../utils/localStorage";
import { CardCartType } from "../../types/cardCart.type";
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'


export const CardComponent: React.FC<CardCartType> = ({img, name, species, status, id}) => {

    let navigate = useNavigate()
    const [disableBtn, setDisableBtn] = React.useState<boolean>(false)
    const dispatch = useAppDispatch()
    const itemExist = useAppSelector((state) => state.cartReducer)

    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            img,
            info: status
        }))
    }

    React.useEffect(()=>{
        itemExist.some((item) => item.id === id)
        ? setDisableBtn(true)
        : setDisableBtn(false)
        setItem("cart", itemExist)
    }, [itemExist, id])

    return(
        <Card>
            <CardMedia 
                component="img"
                height="194"
                image={img}
                alt="Paella dish"
            />
        <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Divider/>
            <Typography sx={{mt:3}}>Especie: {species}</Typography>
            <Box sx={{mt:1.5}}>
                {
                    status == "Alive"
                    ? <Typography>Estado: <Chip label={status} color="success" variant="outlined" /></Typography>
                    : <Typography>Estado: <Chip label={status} color="error" variant="outlined" /></Typography>
                }
            </Box>
        </CardContent>
        <CardActions>
            <Grid container spacing={2}>
                <Grid xs={6} item>
                    <Button fullWidth variant="contained" onClick={()=>navigate(`/character/${id}`)}>Ver Mas</Button>
                </Grid>
                <Grid xs={6} item>
                    <Button fullWidth variant="outlined" onClick={handleAddToCart} disabled={disableBtn}>Agregar</Button>
                </Grid>
            </Grid>
        </CardActions>
        </Card>
    )
}