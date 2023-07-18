import React from "react"
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useState } from "react"
import { useNotification } from "../../context/notification.context"
import { LoginValidate } from "../../utils/validateForm"
import { useFormik } from "formik"

type LoginType = {
    username: string;
    password: string;
}


const LoginPage: React.FC<{}> = () => {

    const { getSuccess } = useNotification()

    const formik = useFormik<LoginType>({
        initialValues: {
          username: "",
          password: "" 
        },
        validationSchema: LoginValidate,
        onSubmit: (values: LoginType) => {
          getSuccess(JSON.stringify(values));
        },
      });

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
                        <Box 
                        component={"form"} 
                        onSubmit={formik.handleSubmit}>
                            <TextField 
                                sx={{ my: 2}}
                                name="username" 
                                fullWidth 
                                label="email" 
                                type="email" 
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username} 
                            />
                            <TextField 
                                sx={{ mb: 2}}
                                name="password" 
                                fullWidth 
                                label="password" 
                                type="password" 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button fullWidth type="submit" variant="contained" sx={{ mb: 2}}>iniciar sesión</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginPage