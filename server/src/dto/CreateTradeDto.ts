import { ObjectId } from 'mongoose';

class CreateTradeDto {
    give: ObjectId;
    take: ObjectId;
}

export default CreateTradeDto;
