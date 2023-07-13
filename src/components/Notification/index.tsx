import React from "react"
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import { AlertColor } from "@mui/material"

type NotificatinProps = {
    open: boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const Notification: React.FC<NotificatinProps> = ({open, msg, severity, handleClose}) => {
    return(
        <Snackbar anchorOrigin={{vertical:"top", horizontal:"center"}} autoHideDuration={4000} open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}><Typography>{msg}</Typography></Alert>
        </Snackbar>
    )
}