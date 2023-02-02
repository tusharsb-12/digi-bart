import React, { useEffect, useState } from 'react';
import UserLayout from '../../components/user/UserLayout';
import { myOffers } from '../../api/trade';
import TradeCard from '../../components/TradeCard';

const UserOffers = () => {
    const [trades, setTrades] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await myOffers();
            console.log(data.trades);
            setTrades(data.trades);
        })();
    }, []);

    return (
        <UserLayout>
            <div>
                <h1 className="text-5xl mb-5">Your offers</h1>
                <div className="grid grid-cols-3 gap-6">
                    {trades.map((trade, idx) => {
                        return <TradeCard key={idx} trade={trade} />;
                    })}
                </div>
            </div>
        </UserLayout>
    );
};

export default UserOffers;
