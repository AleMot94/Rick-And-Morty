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



type CardProps = {
    img: string,
    name: string,
    species: string,
    status: string,
    id: number,
}

export const CardComponent: React.FC<CardProps> = ({img, name, species, status, id}) => {

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
            <Typography sx={{mt:1.5}}>Estado: {status}</Typography>
        </CardContent>
        <CardActions>
            <Grid container spacing={2}>
                <Grid xs={6} item>
                    <Button fullWidth variant="contained" onClick={()=>navigate(`/character/${id}`)}>Learn More</Button>
                </Grid>
                <Grid xs={6} item>
                    <Button fullWidth variant="outlined" onClick={handleAddToCart} disabled={disableBtn}>Add To Cart</Button>
                </Grid>
            </Grid>
        </CardActions>
        </Card>
    )
}