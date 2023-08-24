import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, delContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, { payload }) {
         state.isLoading = false;
         state.error = null;
         state.items = payload;  
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, { payload }) {
         state.isLoading = false;
         state.error = null;
         state.items.push(payload);  
        },
        [addContact.rejected]: handleRejected,

        [delContact.pending]: handlePending,
        [delContact.fulfilled](state, { payload }) {
         state.isLoading = false;
         state.error = null;
         return state.items.filter(contact => contact.id !== payload);  
        },
        [delContact.rejected]: handleRejected
    }
})

// export const { addContact, delContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
