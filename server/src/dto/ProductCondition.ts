import { ObjectId } from 'mongoose';

class ProductConditionDto {
    owner?: ObjectId;
    category?: string;
    shippingAvailablity?: boolean;
    upForTrade?: boolean;
}

export default ProductConditionDto;
