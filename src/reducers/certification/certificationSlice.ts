import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Certification {
  id: number;
  title: string;
  issuingInstitution: string;
  date: string;
  logoUrl: string;
}

interface CertificationsState {
  certifications: Certification[];
}

const initialState: CertificationsState = {
  certifications: [],
};

export const certificationsSlice = createSlice({
  name: "certifications",
  initialState,
  reducers: {
    addCertification(state, action: PayloadAction<Certification>) {
      state.certifications.push(action.payload);
    },
    removeCertification(state, action: PayloadAction<number>) {
      state.certifications = state.certifications.filter(
        (c) => c.id !== action.payload
      );
    },
    updateCertification(state, action: PayloadAction<Certification>) {
      const index = state.certifications.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.certifications[index] = action.payload;
      }
    },
  },
});

export const { addCertification, removeCertification, updateCertification } = certificationsSlice.actions;

export const selectCertifications = (state: RootState) => state.certifications.certifications;

export default certificationsSlice.reducer;
