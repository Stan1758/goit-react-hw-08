import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue("No auth token");
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ADD
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//UPDATE
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
