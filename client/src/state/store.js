import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product'
import userReducer from './user'
import counterReducer from './temp/temp'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // product: productReducer,
        // user: userReducer
    },
})