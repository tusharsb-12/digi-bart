import React from 'react'
import { EditIcon } from '../../assets/icons';

const ProductCard = ({ product, user }) => {
    const { _id, name, description, images, value, category, postedOn, bougtOn, owner, condition, shippingAvailablity, upForTrade, location } = product;

    
    return (
        <div className="relative rounded overflow-hidden shadow-lg bg-white text-black text-md">
            <div>
                {user && product && user._id == owner && <button className='absolute w-5 h-5 top-2 right-2' >
                    <EditIcon />
                </button>}
                <img className="w-full" src={images && images.length && images[0]} alt="Sunset in the mountains" />
            </div>
            <div className="px-3 py-1">
                <div className="font-bold text-lg mb-0.5 text-purple-500">{name}</div>
                <p className="text-gray-700 text-sm">
                    {description.slice(0, Math.min(description.length, 100)) + '...'}
                </p>
            </div>
            <div className="flex flex-wrap px-3 pt-2 pb-2">
                <button className='ml-auto border border-4 px-2 py-1 rounded-lg border-purple-500 hover:text-white hover:bg-purple-500'>
                    Details
                </button>
            </div>
        </div>
    )
}
export default ProductCard