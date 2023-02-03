import API from './index';

export const createTrades = async (data) => {
    const result = await API.post('/trade/create-trade', data);
    return result.data;
};

export const myTrades = async () => {
    const data = await API.get('/trade/my-trades');
    return data.data;
};

export const myOffers = async () => {
    const data = await API.get('/trade/my-offers');
    return data.data;
};

export const getBarterOffers = async (id) => {
    const result = await API.get(`/trade/barter-offer/${id}`);
    return result.data;
};

export const acceptTrade = async (id) => {
    const result = await API.post(`/accept-trade/${id}`);
    return result.data;
};

export const rejectTrade = async (id) => {
    const result = await API.post(`/reject-trade/${id}`);
    return result.data;
};
