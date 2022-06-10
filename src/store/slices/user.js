import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isCloseBrowser: false,
        isAuth: false,
        phrase: "",
        pinCode: "",
    },
    reducers: {
        setPhrase(state, action) {
            state.phrase = action.payload;
        },
        setPinCode(state, action) {
            state.pinCode = action.payload;
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        setIsCloseBrowser(state, action) {
            state.isCloseBrowser = action.payload;
        },
    },
});

export const { setPhrase, setPinCode, setIsAuth } = userSlice.actions;

export default userSlice.reducer;

