import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {userId:1, username:'Jack'},
    {userId:2, username:'Devid'}
]
export const userSlice = createSlice({
    name: 'users',
    initialState:initialState,
    reducers:{}
})


export const selectAllUser = state => state.users

export default userSlice.reducer