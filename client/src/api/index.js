import axios from 'axios';

const API = axios.create({
    // baseURL: 'https://3a3d-103-246-224-166.in.ngrok.io/api',
    baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.authorization = `bearer ${localStorage.getItem('token')}`;
    }
    return req;
});
export default API;
