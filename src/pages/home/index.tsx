import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {

    const { getError } = useNotification()

    const handleClick = () => {
        getError("que ondaaa")
    }

    return (
        <Container sx={{ mt: 9}} maxWidth="xl">
            <Button onClick={handleClick} variant='contained' fullWidth>home</Button>
        </Container>
    )
}