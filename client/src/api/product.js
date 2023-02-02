import API from '.';

export const getProducts = async () => {
    const data = await API.get('/product/all')
    return data.data
}