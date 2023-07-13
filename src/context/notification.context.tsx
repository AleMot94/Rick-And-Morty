import React from "react"
import { useState } from "react"
import { AlertColor } from "@mui/material"
import { Notification } from "../components"

type ContextProps = {
    getError: (msg:string) => void;
}

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{children: JSX.Element}> = ({children}) => {
    
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)

    const getError = (msg: string) => {
        setSeverity("error")
        setOpen(true)
        setMsg(msg)
    };

    const value = {
        getError
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <NotificationContext.Provider value={value}>
            <Notification 
            handleClose={handleClose} 
            open={open} 
            severity={severity} 
            msg={msg}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {

    const context = React.useContext(NotificationContext)

    if(!context) {
        throw new Error("no existe el contexto")
    } else {
        return context
    }
}