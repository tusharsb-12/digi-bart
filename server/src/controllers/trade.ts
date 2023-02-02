import { Request, Response } from 'express';
import { CreateTradeDto } from '../dto';
import { ResponseStatus } from '../enum';
import { Product, Trade } from '../models';

// Create a new trade offer
export const createTrade = async (req: Request, res: Response) => {
    try {
        const input: CreateTradeDto = req.body;
        await Product.findByIdAndUpdate(input.sell, {
            upForTrade: true,
        });

        const sellP = await Product.findById(input.sell);
        const buyP = await Product.findById(input.buy);

        await Trade.create({
            ...input,
            buyUser: buyP?.owner,
            sellUser: sellP?.owner,
        });
        return res.status(201).json({
            status: ResponseStatus.SUCCESS,
            message: 'Trade created',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Get trade offers received by user
export const userTrades = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const id = req.user.id;
        const trades = await Trade.find({ sellUser: id, active: true })
            .populate('sell')
            .populate('buy');
        return res.status(201).json({
            status: ResponseStatus.SUCCESS,
            message: 'Trades fetched',
            trades,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Get trade offers from user
export const userOffers = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const id = req.user.id;
        const trades = await Trade.find({ buyUser: id, active: true })
            .populate('sell')
            .populate('buy');
        return res.status(201).json({
            status: ResponseStatus.SUCCESS,
            message: 'Trades fetched',
            trades,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Accept trade
export const acceptTrade = async (req: Request, res: Response) => {
    try {
        const tradeId = req.params.tradeId;
        await Trade.findOneAndUpdate(
            { id: tradeId },
            {
                $set: {
                    tradeStatus: 'Accepted',
                },
            }
        );
        return res.status(201).json({
            status: ResponseStatus.SUCCESS,
            message: 'Trade accepted',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Accept trade
export const rejectTrade = async (req: Request, res: Response) => {
    try {
        const tradeId = req.params.tradeId;
        await Trade.findOneAndUpdate(
            { id: tradeId },
            {
                $set: {
                    tradeStatus: 'Rejected',
                },
            }
        );
        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Trade rejected',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};
