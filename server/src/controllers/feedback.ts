import { Request, Response } from 'express';
import { FeedbackDto } from '../dto';
import { ResponseStatus } from '../enum';
import Feedback from '../models/Feedback';
import { Trade } from '../models';

// Create feedback
export const createFeedback = async (req: Request, res: Response) => {
    try {
        const input: FeedbackDto = req.body;
        await Feedback.create(input);

        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Feedback posted',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Get buyer feedback
export const buyerFeedback = async (req: Request, res: Response) => {
    try {
        const id = req.params.buyerId;
        const feedbacks = await Feedback.find({ buyerId: id });
        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Feedback fetched',
            feedbacks,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Get seller feedback
export const sellerFeedback = async (req: Request, res: Response) => {
    try {
        const id = req.params.sellerId;
        const feedbacks = await Feedback.find({ sellerId: id });
        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Feedback fetched',
            feedbacks,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};
