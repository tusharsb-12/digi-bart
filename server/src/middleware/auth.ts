// @ts-nocheck
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants';
import { ResponseStatus } from '../enum';
import { User } from '../models';

const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    try {
        const decoded = verify(token, JWT_SECRET);
        console.log(decoded);
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).json({
                success: ResponseStatus.FAIL,
                errors: ['Not authorized'],
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            err: {
                success: ResponseStatus.FAIL,
                message: 'Internal server error',
            },
        });
    }
};

export default authenticate;
