import { createSlice } from "@reduxjs/toolkit";
import { bookInformation } from "./books";
const newBooks = createSlice({
  name: "book",
  initialState: {
    items: bookInformation,
  },
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
export const { addBook } = newBooks.actions;
export default newBooks.reducer;
