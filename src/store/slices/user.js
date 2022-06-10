import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    phrase: '',
    pinCode: '',
  },
  reducers: {
    setPhrase(state, action) {
      state.phrase = action.payload;
    },
    setPinCode(state, action) {
      state.pinCode = action.payload;
    }
  },
});

export const { setPhrase, setPinCode } = userSlice.actions;

export default userSlice.reducer;
