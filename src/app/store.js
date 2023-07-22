import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice'
import editModalReducer from '../features/editModalSlice';
import bookReducer from '../features/book'
export const store = configureStore({
    reducer: {
        modal:modalReducer,
        editModal:editModalReducer,
        book:bookReducer,
    },
});