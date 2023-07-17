import React from "react"
import { useParams } from "react-router-dom"
import { characters } from "../../api/characters"
import { TypeCharacter } from "./interface/character.interface"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'


export const CharacterPage: React.FC<{}> = () => {

    const {id} = useParams()

    const [loading, setLoading] = React.useState<boolean>(true);
    const [character, setCharacter] =React.useState<TypeCharacter | null>(null)
    
    React.useEffect(()=>{
        characters.getById({id})
            .then((res)=>{
                setCharacter(res.data)
                setLoading(false)
            })
            .catch((e)=>{
            console.error(e);
        })
    },[])

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

                        <Grid item xs={6}>
                            <img src={character?.image} style={{width: "100%", borderRadius: "0.5em"}}/>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h2">
                                {character?.name}
                            </Typography>
                            <Divider/>
                            <Typography variant="h5">
                                {character?.origin.name}
                            </Typography>
                            <Box>
                                <Chip label={character?.status} color="success" variant="outlined" />
                            </Box>
                        </Grid>

                    </Grid>        
                )
            }
                
            </Container>
        </Box>
    )
}