import React from "react"
import { useParams } from "react-router-dom"
import { characters } from "../../api/characters"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { addToCart } from "../../redux/slices/cart.slice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { TypeCharacter } from "./interface/character.interface"
import { setItem } from "../../utils/localStorage"


const CharacterPage: React.FC<{}> = () => {

    const {cid} = useParams()
    const [loading, setLoading] = React.useState<boolean>(true);
    const [character, setCharacter] =React.useState<TypeCharacter | null>(null)
    const [disableBtn, setDisableBtn] = React.useState<boolean>(false)
    const itemExist = useAppSelector((state) => state.cartReducer)
    const dispatch = useAppDispatch()

    React.useEffect(()=>{
        characters.getById({cid})
            .then((res)=>{
                setCharacter(res.data)
                setLoading(false)
            })
            .catch((e)=>{
            console.error(e);
        })
    },[])

    React.useEffect(()=>{
        if (character?.id) {
            itemExist.some((item) => item.id === character?.id)
            ? setDisableBtn(true)
            : setDisableBtn(false)
            setItem("cart", itemExist)
        }
    }, [itemExist])

    const handleAddToCart = () => {
        if (character) {
            dispatch(addToCart({
                id: character.id,
                name: character.name,
                img: character.image,
                info: character.status
            }))
        }
    }

    return(
        <Box sx={{ width: "100%"}}>
            <Container maxWidth="xl">
            {
                loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <CircularProgress />
                    </Box> 
                ) : (
                    <Grid container columnSpacing={2} sx={{mt: 3}}>

                        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                            <img src={character?.image} style={{width: "80%", borderRadius: "0.5em"}}/>
                        </Grid>

                        <Grid item xs={6} >
                        
                            <Typography variant="h2">
                                {character?.name}
                            </Typography>

                            <Divider/>

                            <Stack spacing={4} sx={{mt:4}}>
                                <Box>
                                    {
                                        character?.status == "Alive"
                                        ? <Typography variant="h5">Estado: <Chip label={character?.status} color="success" variant="outlined" /></Typography>
                                        : <Typography variant="h5">Estado: <Chip label={character?.status} sx={{fontSize: 28}} color="error" variant="outlined" /></Typography>
                                    }
                                </Box>

                                <Typography variant="h5">
                                    Origen: {character?.origin.name}
                                </Typography>

                                <Typography variant="h5">
                                    Especie: {character?.species}
                                </Typography>

                                <Typography variant="h5">
                                    Genero: {character?.gender}
                                </Typography>

                                <Typography variant="h5">
                                    Ubicado: {character?.location.name}
                                </Typography>

                                <Button fullWidth variant="outlined" onClick={handleAddToCart} disabled={disableBtn}>
                                    Add To Cart
                                </Button>
                            </Stack>
                        </Grid>

                    </Grid>        
                )
            }
                
            </Container>
        </Box>
    )
}

export default CharacterPage