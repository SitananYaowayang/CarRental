import {configureStore} from '@reduxjs/toolkit';
import cartSlice  from './features/cartSlice';
import { useSelector , TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer:{
        cartSlice
    }
})
console.log("Redux store initialized:", store.getState());


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
