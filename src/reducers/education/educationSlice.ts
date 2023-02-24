import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Education {
  id: number;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  logoUrl: string;
  websiteUrl: string;
}

interface EducationState {
  education: Education[];
}

const initialState: EducationState = {
  education: [],
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation(state, action: PayloadAction<Education>) {
      state.education.push(action.payload);
    },
    removeEducation(state, action: PayloadAction<number>) {
      state.education = state.education.filter(
        (e) => e.id !== action.payload
      );
    },
    updateEducation(state, action: PayloadAction<Education>) {
      const index = state.education.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.education[index] = action.payload;
      }
    },
  },
});

export const { addEducation, removeEducation, updateEducation } = educationSlice.actions;

export const selectEducation = (state: RootState) => state.education.education;

export default educationSlice.reducer;
