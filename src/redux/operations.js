import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64e7164ab0fd9648b78f53c3.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts",  text );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delContact = createAsyncThunk(
  "contacts/delContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
