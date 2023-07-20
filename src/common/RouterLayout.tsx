import React from "react"
import { NavBar } from "./NavBar"
import { Outlet, Navigate } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

export const RouterLayout: React.FC<{}> = () => {

    const { isAuth } = useAppSelector((satate) => satate.authReducer)

    return isAuth ? 
        <>
            <NavBar/>
            <Outlet/>
        </>
        :
        <Navigate to="/login"/>
    
    
    /*  (
        <>
            <NavBar/>
            <Outlet/>
        </>
    ) */
}
