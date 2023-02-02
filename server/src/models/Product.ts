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
});

const Product = model('Product', productSchema);

export default Product;
