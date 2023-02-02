import React, { useState } from 'react';
import UserLayout from '../../components/user/UserLayout';
import PageTitle from '../../components/typography/PageTitle';
import { postProduct } from '../../api/product';

function AddProduct() {
    const [data, setData] = useState({
        name: '',
        description: '',
        value: 0,
        category: '',
        condition: '',
        shippingAvailablity: false,
        upForTrade: false,
        images: [],
    });

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onCheck = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.checked,
        });
    };

    const onFileChange = (e) => {
        setData((data) => ({
            ...data,
            images: data.images.concat(e.target.files[0]),
        }));
    };

    const onSubmit = async (e) => {
        console.log(data);
        e.preventDefault();
        const res = await postProduct(data);
        console.log(res.data);
    };

    return (
        <UserLayout>
            <>
                <div>
                    <div className="">
                        <div className="mt-5 md:mt-0">
                            <PageTitle>
                                <span className="mx-4">
                                    Add Product for listing
                                </span>
                            </PageTitle>

                            <form action="#" method="POST">
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Product Name
                                            </label>
                                            <div className="mt-1 p-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    rows={3}
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Iphone13"
                                                    defaultValue={data.name}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="description"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Description
                                            </label>
                                            <div className="mt-1 p-2">
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    rows={3}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Iphone13 with 13MP Camera...."
                                                    defaultValue={
                                                        data.description
                                                    }
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Product Description: Features,
                                                Color, etc
                                            </p>
                                        </div>

                                        <label
                                            htmlFor="value"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Estimated price
                                        </label>
                                        <div className="mt-1 p-2">
                                            <input
                                                id="value"
                                                name="value"
                                                rows={3}
                                                type="number"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder={0}
                                                defaultValue={data.value}
                                                onChange={onChange}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="condition"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Product Condition
                                            </label>
                                            <div className="mt-1 p-2">
                                                <textarea
                                                    id="condition"
                                                    name="condition"
                                                    rows={3}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Camera not working properly..."
                                                    defaultValue={
                                                        data.condition
                                                    }
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Current Product Condition
                                            </p>
                                        </div>

                                        <div className="">
                                            <label
                                                htmlFor="category"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Category
                                            </label>
                                            <select
                                                id="category"
                                                name="category"
                                                autoComplete="category"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                onChange={onChange}
                                            >
                                                <option>Grocery</option>
                                                <option>Mobiles</option>
                                                <option>Electronics</option>
                                                <option>Two Wheeler</option>
                                                <option>Car</option>
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <div className="flex items-start">
                                                    <div className="flex h-5 items-center">
                                                        <input
                                                            id="shipping"
                                                            name="shippingAvailablity"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            value={
                                                                data.shippingAvailablity
                                                            }
                                                            onChange={onCheck}
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="shipping"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            With Shipping ?
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Will you ship the
                                                            product ?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <div className="flex items-start">
                                                    <div className="flex h-5 items-center">
                                                        <input
                                                            id="upForTrade"
                                                            name="upForTrade"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            onChange={onCheck}
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="upForTrade"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            Public
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Other's can see you
                                                            product and bid
                                                            against it.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Product Images
                                            </label>
                                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                                onChange={
                                                                    onFileChange
                                                                }
                                                            />
                                                        </label>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={onSubmit}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </UserLayout>
    );
}

export default AddProduct;
