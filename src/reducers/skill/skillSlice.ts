import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Technology {
  name: string;
  logoUrl: string;
  proficiency: number;
  experience: string;
}

interface SkillsState {
  technologies: Technology[];
}

const initialState: SkillsState = {
  technologies: [],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addTechnology(state, action: PayloadAction<Technology>) {
      state.technologies.push(action.payload);
    },
    removeTechnology(state, action: PayloadAction<string>) {
      state.technologies = state.technologies.filter(
        (technology) => technology.name !== action.payload
      );
    },
    updateTechnology(state, action: PayloadAction<Technology>) {
      const index = state.technologies.findIndex(
        (t) => t.name === action.payload.name
      );
      if (index !== -1) {
        state.technologies[index] = action.payload;
      }
    },
  },
});

export const { addTechnology, removeTechnology, updateTechnology } =
  skillsSlice.actions;

export const selectTechnologies = (state: RootState) => state.skills.technologies;

export default skillsSlice.reducer;
