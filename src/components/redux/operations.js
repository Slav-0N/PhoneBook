import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65352e36c620ba9358ec3d46.mockapi.io";

export const fetchAll = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/new_contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOneContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/new_contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addOneContact = createAsyncThunk(
  "contacts/addContact",
  async (newCont, thunkAPI) => {
    try {
      const response = await axios.post(`/new_contacts/`, newCont);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
