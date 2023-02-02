import axios from 'axios';

const BASE_URI = 'https://adc0-103-246-224-166.in.ngrok.io/api';

// Register user
export const registerUser = async (data) => {
    const result = await axios.post(`${BASE_URI}/user/register`, data);
    console.log(result);
    return result;
};

// Login user
export const loginUser = async (data) => {
    const result = await axios.post(`${BASE_URI}/user/login`, data);
    return result;
};
