import API from './index';

export const createFeedback = async (data) => {
    const res = await API.post('/feedback/create', data);
    return res.data;
};
