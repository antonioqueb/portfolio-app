import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Experience {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  logoUrl: string;
}

interface ExperienceState {
  experience: Experience[];
}

const initialState: ExperienceState = {
  experience: [],
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience(state, action: PayloadAction<Experience>) {
      state.experience.push(action.payload);
    },
    removeExperience(state, action: PayloadAction<number>) {
      state.experience = state.experience.filter(
        (e) => e.id !== action.payload
      );
    },
    updateExperience(state, action: PayloadAction<Experience>) {
      const index = state.experience.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.experience[index] = action.payload;
      }
    },
  },
});

export const { addExperience, removeExperience, updateExperience } = experienceSlice.actions;

export const selectExperience = (state: RootState) => state.experience.experience;

export default experienceSlice.reducer;
