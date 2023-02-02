import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
        default: '',
    },
    address: {
        type: String,
        required: true,
        default: '',
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
    rating: {
        type: Number,
        default: 0,
    },
});

const User = model('User', userSchema);

export default User;
