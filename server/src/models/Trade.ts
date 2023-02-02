import { Schema, model } from 'mongoose';

const tradeSchema = new Schema({
    buy: {
        // Exchange madhe kay ghenar te
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    buyUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    sell: {
        // Kay ghaycha ahe
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
    feedback: {
        type: Schema.Types.ObjectId,
        ref: 'Feeback',
    },
});

const Trade = model('Trade', tradeSchema);

export default Trade;
