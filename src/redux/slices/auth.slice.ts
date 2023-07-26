import { createSlice } from "@reduxjs/toolkit"
import { authLoginThunks } from "../thunks/authLogin.thunk"
import { authRegisterThunks } from "../thunks/authRegister.thunk"
import { RejectedActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers"
import { getCookie } from "../../utils/getCookie.utils"
import { expirationTokenAuth } from "../../utils/decodeToken.utils"
import { TokenFirebase } from "../../interface/firebase.interface"
import { tokenDecode } from "../../utils/decodeToken.utils"

interface AuthState {
    isAuth: boolean,
    success: boolean | null,
    error: RejectedActionFromAsyncThunk<any> | null,
    loading: boolean | null,
    userData: {
        email: string | null,
        uid: string | null
    } | null,
    accessToken: string | null,
    isExpired: boolean | null
}

const initialState : AuthState = {
    isAuth: 
        getCookie("accessToken") !== undefined 
        ? !expirationTokenAuth(getCookie("accessToken")!)
        : false,
    accessToken: 
        getCookie("accessToken") !== undefined
        ? getCookie("accessToken")!
        : null,
    error: null,
    isExpired: 
        getCookie("accessToken") !== undefined 
        ? !expirationTokenAuth(getCookie("accessToken")!)
        : null,
    loading: false,
    success: getCookie("accessToken") !== undefined,
    userData: getCookie("accessToken") !== undefined
    ? {
        email: tokenDecode<TokenFirebase>(getCookie("accessToken")!).email,
        uid: tokenDecode<TokenFirebase>(getCookie("accessToken")!).sub,
    }: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
     
        logout: (state) => {
            state.isAuth = false
        },
     
    },
    extraReducers: (builder) => {
        //LOGIN
        builder.addCase(authLoginThunks.pending,(state)=>{
            return (state = {
                ...initialState,
                loading: true
            })
        })
        builder.addCase(authLoginThunks.fulfilled,(state,actions)=>{
            return (state = {
                ...initialState,
                loading: false,
                success:true,
                accessToken: actions.payload.accessToken,
                isAuth: true,
                isExpired: false,
                userData: actions.payload.userData,
            })
        })
        builder.addCase(authLoginThunks.rejected,(state, action)=>{
            return (state = {
                ...initialState,
                error: action.payload,
            })
        })
        //REGISTER
        builder.addCase(authRegisterThunks.pending, (state) => {
            return {
                ...initialState,
                loading: true
            };
        });
        builder.addCase(authRegisterThunks.fulfilled, (state, actions) => {
            return {
                ...initialState,
                loading: false,
                success: true,
                accessToken: actions.payload.accessToken,
                isAuth: true,
                isExpired: false,
                userData: actions.payload.userData,
            };
        });
        builder.addCase(authRegisterThunks.rejected, (state, action) => {
            return {
                ...initialState,
                error: action.payload,
            };
        });
    }
})

export const { logout } = authSlice.actions