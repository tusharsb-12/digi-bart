import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard2 = ({ product, user, edit_flag = true, link_flag = true }) => {
    const { _id, name, description, images, value, category, postedOn, bougtOn, owner, condition, shippingAvailablity, upForTrade, location } = product;
    return (

        <Link to={link_flag ? `/product/${_id}` : '#'}>
            <div key={_id} className="group relative drop-shadow-xl">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                        src={images && images[0]}
                        alt=''
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{description.slice(0, Math.min(description.length, 100)) + '...'}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                {/* <div className="flex flex-wrap px-3 pt-2 pb-2">
                <button className='ml-auto border border-4 px-2 py-1 rounded-lg border-purple-500 hover:text-white hover:bg-purple-500'>
                    Details
                </button>
            </div> */}
            </div>
        </Link>
    )
}

export default ProductCard2