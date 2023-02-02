import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema({
    buyerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    sellerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    trade: {
        type: Schema.Types.ObjectId,
        ref: 'Trade',
    },
    rating: {
        type: Number,
        default: 0,
    },
    review: {
        type: String,
        default: '',
    },
});

const Feedback = model('Feedback', feedbackSchema);

export default Feedback;
