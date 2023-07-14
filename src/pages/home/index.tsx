import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {

    return (
        <Container maxWidth="xl">
          <HeaderComponent 
            title="Un Titulo" 
            description="esta es una descripcion" 
            element={<Button variant="contained">boton</Button>}/>
        </Container>
    )
}