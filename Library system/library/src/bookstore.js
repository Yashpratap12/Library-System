import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./addBook.js";
const bookStore = configureStore({
  reducer: {
    book: bookReducer,
  },
});
export default bookStore;
