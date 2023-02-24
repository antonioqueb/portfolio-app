import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Contact {
  id: number;
  email: string;
  phoneNumber: string;
  linkedInUrl: string;
  githubUrl: string;
}

interface ContactState {
  contact: Contact;
}

const initialState: ContactState = {
  contact: {
    id: 1,
    email: "",
    phoneNumber: "",
    linkedInUrl: "",
    githubUrl: "",
  },
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateContact(state, action: PayloadAction<Contact>) {
      state.contact = action.payload;
    },
  },
});

export const { updateContact } = contactSlice.actions;

export const selectContact = (state: RootState) => state.contact.contact;

export default contactSlice.reducer;
