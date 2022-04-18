import {configureStore} from '@reduxjs/toolkit';
import carReducer from "../components/features/carSlice";
export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});