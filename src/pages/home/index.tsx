import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {

    React.useEffect(()=>{
        characters.getAll({page:2}).then((res)=>{
            console.log(res.data.results)
        }).catch((e)=>{
            console.log(e)
        }),

        characters.getById({id:27}).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    }, [])

    return (
        <Container maxWidth="xl">
          <HeaderComponent 
            title="Un Titulo" 
            description="esta es una descripcion" 
            element={<Button variant="contained">boton</Button>}/>
        </Container>
    )
}