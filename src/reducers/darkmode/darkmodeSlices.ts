import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

interface DarkmodeState {
  isDarkMode: boolean;
}

const initialState: DarkmodeState = {
  isDarkMode: false,
};

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkmodeSlice.actions;

export const selectIsDarkMode = (state: RootState) => state.darkmode.isDarkMode;

export default darkmodeSlice.reducer;
