import { fetchAll } from "./operations";
import { createSlice } from "@reduxjs/toolkit";
import { deleteOneContact, addOneContact } from "./operations";

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

        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteOneContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addOneContact.pending, (state, action) => {
        console.log(action.payload);
        state.isLoading = true;
      })
      .addCase(addOneContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })
      .addCase(addOneContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // доделать слайс addContact
  },
});

export const contactsReducer = contactSlice.reducer;
