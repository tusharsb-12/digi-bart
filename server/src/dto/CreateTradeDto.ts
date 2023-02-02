import { ObjectId } from 'mongoose';

class CreateTradeDto {
    // I want to buy
    buy: ObjectId;
    // In exchange of
    sell: ObjectId;
}

export default CreateTradeDto;
