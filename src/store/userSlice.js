import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user: [],
        isLoggedIn: false
    },
    reducers:{
        login: (state, action) => ({
            ...state,
            user: action.payload
        }),
        setisLoggedIn: (state, action) => ({
            ...state,
            isLoggedIn: action.payload
        }),

    },
});

export const { login, setisLoggedIn } = userSlice.actions;

export const selectUser = (state) => state.user.isLoggedIn;

export default userSlice