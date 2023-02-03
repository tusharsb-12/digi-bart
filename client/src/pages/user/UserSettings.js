import React, { useEffect, useState } from 'react';
import UserLayout from '../../components/user/UserLayout'
import PageTitle from '../../components/typography/PageTitle'
import { getUserData } from '../../api/user';

const UserSettings = () => {
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
            });
            console.log(data.data.user);
        })();
    }, []);
    return (
        <UserLayout>
            <>
                <div>
                    <div className="">
                        <div className="mt-5 md:mt-0">
                            <PageTitle>
                                <span className="mx-4">
                                    Update User Information
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
                                                First Name
                                            </label>
                                            <div className="mt-1 p-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    value={userData.firstName}
                                                    rows={3}
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="John"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Last Name
                                            </label>
                                            <div className="mt-1 p-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    value={userData.lastName}
                                                    rows={3}
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Email
                                            </label>
                                            <div className="mt-1 p-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    rows={3}
                                                    value={userData.email}
                                                    type="email"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="John@doe.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Contact No.
                                            </label>
                                            <div className="mt-1 p-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    rows={3}
                                                    value={userData.contactNumber}
                                                    type="number"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="99999999999"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="address"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Address
                                            </label>
                                            <div className="mt-1 p-2">
                                                <textarea
                                                    id="address"
                                                    name="address"
                                                    rows={3}
                                                    value={userData.address}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="xyz, housing society, malad west, mumbai..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

export default UserSettings