import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};


const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer({items},{payload}) {
                items.push(payload)
            }
        },
        delContact: {
            reducer({ items }, {payload}) {
                return items.filter(contact => contact.id !== payload)
          }
        }
    }
})

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
