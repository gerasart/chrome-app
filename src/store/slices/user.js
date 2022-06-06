import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    phrase: '',
  },
  reducers: {
    setPhrase(state, action) {
      state.phrase = action.payload;
    },
  },
});

export const { setPhrase } = userSlice.actions;

export default userSlice.reducer;
