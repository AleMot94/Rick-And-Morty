import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
    username: string;
    password: string;
}


export const LoginPage: React.FC<{}> = () => {

    const { getError, getSuccess } = useNotification();
    const [ loginData, setLoginData ] = useState<LoginType>({
        username: "",
        password: "",
    })

    // GUARDA LOS VALORES DEL INPUT EN loginData
    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(loginData)
        LoginValidate.validate(loginData).then(()=>{
            getSuccess(JSON.stringify(loginData))
        }).catch((error) =>{
            getError(error.message)
        })
        setLoginData({ username: "", password: "" });
    }

    return (
        <Container maxWidth="sm">
            <Grid 
             container
             direction={"column"}
             alignItems={"center"}
             justifyContent={"center"}
             sx={{ minHeight: "100vh"}}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em"}}>
                        <Typography variant="h4" sx={{ my: 1}}>Inciar Sesión</Typography>
                        <Box component={"form"} onSubmit={handleSubmit}>
                            <TextField name="username" fullWidth label="email" type="email" onChange={dataLogin} value={loginData.username} sx={{ my: 2}}/>
                            <TextField name="password" fullWidth label="password" type="password" onChange={dataLogin} value={loginData.password} sx={{ mb: 2}}/>
                            <Button fullWidth type="submit" variant="contained" sx={{ mb: 2}}>iniciar sesión</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}