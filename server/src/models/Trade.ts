import { Schema, model } from 'mongoose';

const tradeSchema = new Schema({
    buy: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    buyUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    sell: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    sellUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    active: {
        type: Boolean,
        default: true,
    },
    tradeStatus: {
        type: String,
        default: 'Pending',
    },
});

const Trade = model('Trade', tradeSchema);

export default Trade;
