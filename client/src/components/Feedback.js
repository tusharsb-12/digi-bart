import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ImageLight from '../assets/img/login-office.jpeg';
import ImageDark from '../assets/img/login-office-dark.jpeg';
import { GoogleIcon } from '../assets/icons';
import { Label, Input, Button } from '@windmill/react-ui';
import { loginUser } from '../api/user';

export default function Modal() {
    const [showModal, setShowModal] = React.useState(true);
    const [feedback, setFeedback] = useState({
        rating: 5,
        review: '',
    });

    const onChange = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button>
            {showModal ? (
                <>
                    <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="text-3xl mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Login
                            </h1>
                            <Label>
                                <span>Rating</span>
                                <Input
                                    className="mt-1 p-2"
                                    type="range"
                                    min={0}
                                    max={5}
                                    step={0.1}
                                    name="rating"
                                    onChange={onChange}
                                    value={feedback.rating}
                                />
                            </Label>

                            <Label className="mt-4">
                                <span>Review</span>
                                <Input
                                    className="mt-1 p-2"
                                    type="textbox"
                                    placeholder="How was your experience?"
                                    name="review"
                                    onChange={onChange}
                                    value={feedback.review}
                                />
                            </Label>

                            <Button className="mt-4" block onClick={() => {}}>
                                Submit Feedback
                            </Button>
                        </div>
                    </main>
                </>
            ) : null}
        </div>
    );
}
