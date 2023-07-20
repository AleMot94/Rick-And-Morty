import { createSlice } from "@reduxjs/toolkit";
import { authThunks } from "../thunks/auth.thunks";
import { RejectedActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

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
    isAuth: false,
    accessToken: null,
    error: null,
    isExpired: null,
    loading: null,
    success: null,
    userData: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true
        },
        logout: (state) => {
            state.isAuth = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authThunks.pending,(state)=>{
            return (state = {
                ...initialState,
                loading: true
            })
        })
        builder.addCase(authThunks.fulfilled,(state,actions)=>{
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
        builder.addCase(authThunks.rejected,(state, action)=>{
            return (state = {
                ...initialState,
                error: action.payload,
            })
        })
    }
})

export const { login, logout} = authSlice.actions