// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../redux/Reducer'; // Ensure the path is correct

const store = configureStore({
    reducer: {
        books: bookReducer, // Connect the reducer here
    },
});

export default store;
