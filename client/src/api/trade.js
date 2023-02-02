export const createTrades = async () => {
    const data = await API.get('/trade/create-trade');
    return data.data;
};

export const myTrades = async () => {
    const data = await API.get('/trade/my-trades');
    return data.data;
};

export const myOffers = async () => {
    const data = await API.get('/trade/my-offers');
    return data.data;
};
