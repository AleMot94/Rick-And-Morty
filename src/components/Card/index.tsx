import React from "react";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { useNavigate } from "react-router-dom";



type CardProps = {
    img: string,
    name: string,
    species: string,
    status: string,
    id: number,
}

export const CardComponent: React.FC<CardProps> = ({img, name, species, status, id}) => {

    let navigate = useNavigate()

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
            <Button fullWidth variant="contained" onClick={()=>navigate(`/character/${id}`)}>Learn More</Button>
        </CardActions>
        </Card>
    )
}