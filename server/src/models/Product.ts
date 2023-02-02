import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: [],
    },
    value: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    postedOn: {
        type: Date,
        default: Date.now,
    },
    boughtOn: {
        type: Date,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    condition: {
        type: String,
    },
    shippingAvailablity: {
        type: Boolean,
        default: false,
    },
    upForTrade: {
        type: Boolean,
        default: false,
    },
    location: {
        type: {
            type: String,
            enum: 'Point',
            required: true,
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            required: true,
            default: [0, 0],
        },
    },
});

const Product = model('Product', productSchema);

export default Product;
