import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './temp/temp'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})