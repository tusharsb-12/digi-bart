import API from '.';
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

