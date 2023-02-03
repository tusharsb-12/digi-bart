import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { StarIcon } from '@heroicons/react/20/solid';
import OfferProducts from './OfferProducts';
import BarterProduct from './BarterProduct';
import { getProductById } from '../../api/product';
import { RadioGroup } from '@headlessui/react';
import { ReportIcon } from '../../assets/icons';
import ComplaintModal from '../../components/product/ComplaintModal'
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Product', href: '#' },
        { id: 2, name: 'Category', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Product() {
    const [result, setProduct] = useState({
        name: '',
        description: '',
        owner: {
            firstName: '',
            lastName: '',
            rating: 0,
        },
        condition: '',
        category: '',
        shippingAvailablity: false,
        images: [],
    });
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await getProductById(id);
            console.log(data);
            setProduct(data.data.product);
        })();
    }, []);

    return (
        <Layout>
            <BarterProduct open={open} setOpen={setOpen} />
            <ComplaintModal open={open2} setOpen={setOpen2} />
            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol
                            role="list"
                            className="mx-auto flex max-w-4xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                        >
                            {product.breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <a
                                            href={breadcrumb.href}
                                            className="mr-2 text-sm font-medium text-gray-900"
                                        >
                                            {breadcrumb.name}
                                        </a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                            <li className="text-sm">
                                <a
                                    href={product.href}
                                    aria-current="page"
                                    className="font-medium text-gray-500 hover:text-gray-600"
                                >
                                    {result.name}
                                </a>
                            </li>
                        </ol>
                    </nav>

                    {/* Image gallery */}
                    {/* <div className="mx-auto mt-6 max-w-4xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <img
                                    src={product.images[1].src}
                                    alt={product.images[1].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <img
                                    src={product.images[2].src}
                                    alt={product.images[2].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                            <img
                                src={product.images[3].src}
                                alt={product.images[3].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div> */}
                    <div className="mx-auto mt-6 max-w-4xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        {result.images.map((image, index) => {
                            return (
                                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                                    <img
                                        src={image}
                                        alt={''}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Product info */}
                    <div className=" mx-auto max-w-4xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="flex lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mr-2">
                                {result.name}
                            </h1>
                            <button onClick={() => {
                                setOpen2(true)
                            }}> <span className='flex text-black'><ReportIcon /> <span className='mx-1' >Report</span> </span></button>

                        </div>
                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>

                            <p className="text-3xl tracking-tight text-gray-900">
                                Rs. {result.value}
                            </p>

                            {/* Reviews */}
                            {/* <div className="mt-6"> */}
                            {/* <h3 className="sr-only">Profile Reviews</h3> */}
                            {/* <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div> */}
                            {/* </div> */}
                            <div className="mt-4 flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 text-gray-100">
                                <img
                                    src="https://source.unsplash.com/150x150/?portrait?3"
                                    alt=""
                                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div className="space-y-4 text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl text-black">
                                            {result.owner.firstName}{' '}
                                            {result.owner.lastName}
                                        </h2>
                                        <p className="px-5 text-xs sm:text-base dark:text-gray-800">
                                            Mumbai, India
                                        </p>
                                    </div>
                                    <div className="flex justify-center pt-2 space-x-4 align-center">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                {[0, 1, 2, 3, 4].map(
                                                    (rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            className={classNames(
                                                                reviews.average >
                                                                    rating
                                                                    ? 'text-gray-900'
                                                                    : 'text-gray-200',
                                                                'h-5 w-5 flex-shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <p className="sr-only">
                                                {result.owner.rating
                                                    ? result.owner.rating
                                                    : 2}{' '}
                                                out of 5 stars
                                            </p>
                                            <a
                                                href={reviews.href}
                                                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                {reviews.totalCount} reviews
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                // type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                Barter Product
                            </button>
                        </div>

                        <div className="py-10 pb-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-4 lg:pb-2 lg:pr-8">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>
                                {/* Descriptions */}
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">
                                        {result.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">
                                    Condition
                                </h2>

                                <div className="mt-4 space-y-6">
                                    {/* Condition */}
                                    <p className="text-sm text-gray-600">
                                        {result.condition}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Highlights
                                </h3>

                                <div className="mt-4">
                                    <ul
                                        role="list"
                                        className="list-disc space-y-2 pl-4 text-sm"
                                    >
                                        <li className="text-gray-400">
                                            {' '}
                                            <span className="text-gray-600">
                                                {result.shippingAvailablity}{' '}
                                                {'Available'} :{' '}
                                                {'Not Available'}
                                            </span>{' '}
                                        </li>
                                        <li className="text-gray-400">
                                            {' '}
                                            <span className="text-gray-600">
                                                Category : {result.category}
                                            </span>{' '}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OfferProducts />
        </Layout>
    );
}
