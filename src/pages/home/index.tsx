import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { CardComponent } from "../../components";
import { TypeCharacter } from "./interface/character.interface";
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export const HomePage: React.FC<{}> = () => {

    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)

    React.useEffect(()=>{
        characters.getAll({page:1}).then((res)=>{
            setAllCharacters(res.data.results)
        }).catch((e)=>{
            console.log(e)
        }),

        characters.getById({id:27}).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    }, [])

    console.log(allCharacters)

    return (
        <Container maxWidth="xl">
          <HeaderComponent 
                title="Un Titulo" 
                description="esta es una descripcion" 
                element={<Button variant="contained">boton</Button>}
           />
           <div>
            {allCharacters!.length > 0 ? (
                        <Grid container spacing={2} direction="row">
                            {allCharacters?.map((character) => (
                                <Grid item xs={3}>
                                    <CardComponent 
                                        key={character.id} 
                                        img={character.image} 
                                        name={character.name} 
                                        species={character.species} 
                                        status={character.status}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    ) : <div>no hay data</div>
                }
           </div>
             
        </Container>
    )
}