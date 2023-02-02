import { ObjectId } from 'mongoose';

class FeedbackDto {
    trade: ObjectId;
    rating: number;
    review: string;
    buyerId: ObjectId;
    sellerId: ObjectId;
}

export default FeedbackDto;
