import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../../config/firebase";

export const authRegisterThunks = createAsyncThunk(
    "firebase/register",
    async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
      try {
        const authCreateUser = await createUserWithEmailAndPassword(
          authFirebase,
          username,
          password
        );
  
        const { uid, email } = authCreateUser.user;
        const { token: accessToken, expirationTime } = await authCreateUser.user.getIdTokenResult();
  
        return {
          accessToken,
          expirationTime,
          userData: {
            email,
            uid,
          },
        };
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );