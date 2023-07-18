import React from "react"
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

interface CartProps {
    open: boolean
}

export const Cart: React.FC<CartProps> = ({open}) =>{


    return(
        <Drawer anchor={'right'} open={open}>

        </Drawer>
    )
} 