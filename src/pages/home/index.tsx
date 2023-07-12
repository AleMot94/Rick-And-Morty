import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export const HomePage: React.FC<{}> = () => {
    return (
        <Container sx={{ mt: 9}} maxWidth="xl">
            <Button variant='contained' fullWidth>home</Button>
        </Container>
    )
}