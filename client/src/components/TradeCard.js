import React from 'react';
import { EditIcon } from '../assets/icons';

const TradeCard = ({ trade }) => {
    const { sell, buy } = trade;
    return (
        <div className="group relative drop-shadow-xl">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                    src={sell.images && sell.images[0]}
                    alt=""
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Selling: {sell.name}
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    In exchange for: {buy.name}
                </p>
            </div>
        </div>
    );
};
export default TradeCard;
