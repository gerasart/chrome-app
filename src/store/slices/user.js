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
        clearStore(state) {
            state.isCloseBrowser = false;
            state.isAuth = false;
            state.phrase = "";
            state.pinCode = "";
        },
    },
});

export const {
    setPhrase,
    setPinCode,
    setIsAuth,
    setIsCloseBrowser,
    clearStore,
} = userSlice.actions;

export default userSlice.reducer;
