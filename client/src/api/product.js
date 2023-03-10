import axios from 'axios';
import API from '.';

export const getProducts = async () => {
    const data = await API.get('/product/all');
    return data.data;
};

export const getUserProducts = async () => {
    const data = await API.get('/user/my-products');
    return data.data;
};

export const postProduct = async (data) => {
    const res = await API.post('/product/post', data);
    return res;
};

export const getProductById = async (id) => {
    const res = await API.get(`/product/${id}`);
    return res;
};

export const getAll = async () => {
    const res = await API.get('/product/all');
    return res;
};
