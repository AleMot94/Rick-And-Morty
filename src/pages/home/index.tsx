import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {

    const { getError, getSuccess } = useNotification();
    
    const handleClickError = () => {
        getError("algun error salio")
    }

    const handleClickSuccess = () => {
        getSuccess("algo salio exitasamente")
    }


    return (
        <Container sx={{ mt: 9}} maxWidth="xl">
            <Button onClick={handleClickError} variant='contained' fullWidth>error</Button>
            <Button onClick={handleClickSuccess} variant='contained' fullWidth>success</Button>
        </Container>
    )
}