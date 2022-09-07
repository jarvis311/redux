import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []
const USER_URL = 'https://jsonplaceholder.typicode.com/users'
export const fetchUser = createAsyncThunk(
    'users/fetchUser', 
    async() => {
        const response = await axios.get(USER_URL)
        return await response.data
    }
)
export const userSlice = createSlice({
    name: 'users',
    initialState:initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            return action.payload
        })
    }
})


export const selectAllUser = state => state.users

export default userSlice.reducer