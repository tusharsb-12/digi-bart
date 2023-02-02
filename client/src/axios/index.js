import axios from 'axios';

const API = axios.create({
    baseURL: 'https://3a3d-103-246-224-166.in.ngrok.io/api',
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.authorization = `bearer ${localStorage.getItem('token')}`;
    }
    return req;
});

// Register user
export const registerUser = async (data) => {
    const result = await API.post(`/user/register`, data);
    console.log(result);
    return result;
};

// Login user
export const loginUser = async (data) => {
    const result = await API.post(`/user/login`, data);
    return result;
};

// User data
export const getUserData = async () => {
    const result = await API.get('/user/user-details');
    console.log(result);
    return result;
};
