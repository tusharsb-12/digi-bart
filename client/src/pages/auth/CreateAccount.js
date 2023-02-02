import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/user';

import ImageLight from '../../assets/img/create-account-office.jpeg';
import ImageDark from '../../assets/img/create-account-office-dark.jpeg';
import { GoogleIcon } from '../../assets/icons';
import { Input, Label, Button } from '@windmill/react-ui';

function CreateAccount() {
    const [tick, setTick] = useState(true);
    const [accDetails, setAccDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const onChangeAccDetails = (e) => {
        setAccDetails({
            ...accDetails,
            [e.target.name]: e.target.value,
        });
    };

    const register = async (e) => {
        e.preventDefault();
        const res = await registerUser(accDetails);

        if (res.data.status === 'SUCCESS') {
            navigate('/login');
        }
    };

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img
                            aria-hidden="true"
                            className="object-cover w-full h-full dark:hidden"
                            src={ImageLight}
                            alt="Office"
                        />
                        <img
                            aria-hidden="true"
                            className="hidden object-cover w-full h-full dark:block"
                            src={ImageDark}
                            alt="Office"
                        />
                    </div>
                    <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                                Create account
                            </h1>
                            <Label>
                                <span>First Name</span>
                                <Input
                                    className="mt-1 p-2"
                                    type="text"
                                    placeholder="john"
                                    name="firstName"
                                    onChange={onChangeAccDetails}
                                    value={accDetails.firstName}
                                />
                            </Label>
                            <Label className="mt-4">
                                <span>Last Name</span>
                                <Input
                                    className="mt-1 p-2"
                                    type="text"
                                    placeholder="doe"
                                    name="lastName"
                                    onChange={onChangeAccDetails}
                                    value={accDetails.lastName}
                                />
                            </Label>
                            <Label className="mt-4">
                                <span>Email</span>
                                <Input
                                    className="mt-1 p-2"
                                    type="email"
                                    placeholder="john@doe.com"
                                    name="email"
                                    onChange={onChangeAccDetails}
                                    value={accDetails.email}
                                />
                            </Label>

                            <Label className="mt-4">
                                <span>Password</span>
                                <Input
                                    className="mt-1 p-2"
                                    type="password"
                                    name="password"
                                    onChange={onChangeAccDetails}
                                    value={accDetails.password}
                                />
                            </Label>
                            <Label className="mt-4">
                                <span>Confirm password</span>
                                <Input
                                    className="mt-1 p-2"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={onChangeAccDetails}
                                    value={accDetails.confirmPassword}
                                />
                            </Label>

                            <Label className="mt-6" check>
                                <Input
                                    type="checkbox"
                                    value={tick}
                                    onClick={() => {
                                        console.log(tick);
                                        setTick(!tick);
                                    }}
                                />
                                <span className="ml-2">
                                    I agree to the{' '}
                                    <span className="underline">
                                        privacy policy
                                    </span>
                                </span>
                            </Label>

                            <Button block className="mt-4" onClick={register}>
                                Create account
                            </Button>

                            <hr className="my-8" />

                            <Button block layout="outline">
                                <GoogleIcon
                                    className="w-4 h-4 mr-2"
                                    aria-hidden="true"
                                />
                                Google
                            </Button>

                            <p className="mt-4">
                                <Link
                                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                    to="/login"
                                >
                                    Already have an account? Login
                                </Link>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
