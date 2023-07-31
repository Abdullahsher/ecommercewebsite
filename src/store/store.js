import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/productsSlice';
import cartReducer from './cartSlice'


const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
})

export default store;