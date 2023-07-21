import { createAsyncThunk } from "@reduxjs/toolkit"
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../../config/firebase"

export const authLoginThunks = createAsyncThunk(
    "firebase/auth",
    async ( {username, password}:{username: string, password:string}, { rejectWithValue } )=>{
        try {
            const authSingIn = await signInWithEmailAndPassword(
                authFirebase,
                username,
                password
            )

            const { email, uid } = authSingIn.user
            const { token: accessToken, expirationTime } = await authSingIn.user.getIdTokenResult()

            return {
                accessToken,
                expirationTime,
                userData: {
                    email,
                    uid
                }
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)