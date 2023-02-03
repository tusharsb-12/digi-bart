import { useState, useEffect } from 'react';
import { getBarterOffers } from '../../api/trade';
import { ChatIcon, CloseIcon, DoneIcon } from '../../assets/icons';
import { useParams } from 'react-router-dom';
import FeedbackModal from '../../components/product/FeedbackModal';

const products = [
    [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
    ],
    [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
    ],
    [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
    ],
    [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
    ],
    [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            description: 'Black',
        },
    ],
];

export default function OfferProducts() {
    const [open, setOpen] = useState(false);
    const [trades, setTrades] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const data = await getBarterOffers(id);
            console.log(data.trades);
            setTrades(data.trades);
        })();
    }, []);

    return (
        <div className="bg-white">
            <FeedbackModal open={open} setOpen={setOpen} />
            <div className="mx-auto max-w-4xl py-0 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Barter Offers
                </h2>

                {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"> */}
                <div className="mt-6 flex flex-wrap">
                    {/* {products.map((product_grp, idx) => ( */}
                    <div className="group relative mx-auto mb-8">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            {trades.map((product, index) => {
                                return (
                                    <div key={index}>
                                        <div className="flex flex-wrap justify-center">
                                            <button
                                                type="button"
                                                className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg m-2"
                                                onClick={(e) => {
                                                    console.log('Close');
                                                }}
                                            >
                                                <CloseIcon />
                                            </button>
                                            <button
                                                type="button"
                                                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg m-2"
                                                onClick={() => {
                                                    console.log('hello');
                                                }}
                                            >
                                                <ChatIcon />
                                            </button>
                                            <button
                                                type="button"
                                                className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg m-2"
                                                onClick={() => {
                                                    console.log('hello');
                                                }}
                                            >
                                                <DoneIcon />
                                            </button>
                                        </div>
                                        <div key={index}>
                                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                                <img
                                                    src={product.sell.images[0]}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        {/* <a href={product.href}> */}
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        />
                                                        {product.sell.name}
                                                        {/* </a> */}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {
                                                            product.sell
                                                                .description
                                                        }
                                                    </p>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {product.sell.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
