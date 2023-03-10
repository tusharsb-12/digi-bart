import React, { useEffect, useState } from 'react';
import UserLayout from '../../components/user/UserLayout';
import ProductCard from '../../components/product/ProductCard2';
import { getProducts, getUserProducts } from '../../api/product';
import { getUserData } from '../../api/user';

const UserProducts = () => {
    const [products, setProducts] = useState([]);
    const [userData, setUserData] = useState({
        location: {
            type: 'Point',
            coordinates: [0, 0],
        },
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        address: '',
        rating: 0,
    });

    useEffect(() => {
        (async () => {
            const data = await getUserData();
            setUserData({
                ...data.data.user,
                address: '416, Tiranga Society, Yashwant Nagar, Goregaon West',
            });
            console.log(data.data.user);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const data = await getUserProducts();
            console.log(data.products);
            setProducts(data.products);
        })();
    }, [userData]);

    return (
        <UserLayout>
            <div>
                <h1 className="text-5xl">My Products</h1>
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product, idx) => {
                        return (
                            <ProductCard
                                key={idx}
                                product={product}
                                user={userData}
                            />
                        );
                    })}
                </div>
            </div>
        </UserLayout>
    );
};

export default UserProducts;
