import { Request, Response } from 'express';
import { CreateUserDto, LoginUserDto } from 'src/dto';
import { User } from '../models';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants';
import { ResponseStatus } from '../enum';

// Register user
export const createUser = async (req: Request, res: Response) => {
    try {
        const input: CreateUserDto = req.body;
        await User.create(input);
        return res.status(201).json({
            status: ResponseStatus.SUCCESS,
            message: 'Account created',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Login user
export const loginUser = async (req: Request, res: Response) => {
    try {
        const input: LoginUserDto = req.body;
        let user = await User.findOne({ email: input.email });
        if (!user) {
            return res.status(404).json({
                status: ResponseStatus.FAIL,
                errors: ['Account with this email does not exist'],
            });
        } else {
            const match = user.password === input.password;
            if (!match) {
                return res.status(400).json({
                    status: ResponseStatus.FAIL,
                    errors: ['Invalid credentials'],
                });
            } else {
                const token = sign({ _id: user._id }, JWT_SECRET!);
                return res.status(200).json({
                    status: ResponseStatus.SUCCESS,
                    message: 'Login successful',
                    token,
                });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Get user details
export const userDetails = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const id = req.user.id;
        const user = await User.findById(id);

        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'User fetched',
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};
