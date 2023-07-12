import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export const LoginPage: React.FC<{}> = () => {
    return (
        <Container sx={{ mt: 9}} maxWidth="xl">
            <Button variant='contained' fullWidth>login page</Button>
        </Container>
    )
}