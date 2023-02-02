import { createSlice } from '@reduxjs/toolkit'
import API from '../api';
const initialState = {
    "location": {
        "type": "Point",
        "coordinates": [
            0,
            0
        ]
    },
    "_id": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "contactNumber": "",
    "address": "",
    "rating": 0,
    "authenticated": localStorage.getItem('token') ? true : false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: async (state, action) => {
            const result = await API.post(`/user/register`, action.payload);
            const data = result.data;
            return data.status;
        },
        loginUser: async (state, action) => {
            const result = await API.post(`/user/login`, action.payload);
            return result;
        },
        getUserData: async (state, action) => {
            const result = await API.get('/user/user-details');
            console.log(result);
            return result;
        },

    }
})

export const { getUserData } = userSlice.actions
export default userSlice.reducer