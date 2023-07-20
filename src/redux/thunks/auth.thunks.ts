import { createAsyncThunk } from "@reduxjs/toolkit"
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../../config/firebase"

export const authThunks = createAsyncThunk(
    "firebase/auth",
    async ( {username, password}:{username: string, password:string}, { rejectWithValue} )=>{
        try {
            const authGenerate = await signInWithEmailAndPassword(
                authFirebase,
                username,
                password
            )

            const {email,uid} = authGenerate.user
            const { token: accessToken, expirationTime} = await authGenerate.user.getIdTokenResult()

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