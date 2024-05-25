import { fetchAll } from "./operations";
import { createSlice } from "@reduxjs/toolkit";
import { deleteOneContact } from "./operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteOneContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOneContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log("action.payload.id", action.payload.id);
        console.log(state);
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteOneContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactSlice.reducer;

console.log("Initial state:", contactSlice.reducer(undefined, {}));
