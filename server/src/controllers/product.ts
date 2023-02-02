import { Request, Response } from 'express';
import { PostProductDto, ProductConditionDto } from '../dto';
import { Product, User } from '../models';
import uploadToCloudinary from '../utils/uploadToCloudinary';
import { ResponseStatus } from '../enum';

// Post a product in the market place
export const postProduct = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const id = req.user.id;
        const user = await User.findById(id);
        const input: PostProductDto = req.body;
        let images: string[] = [];
        if (req.files) {
            const files = req.files as Express.Multer.File[];
            for (let i = 0; i < files.length; i++) {
                const file = files[i] as Express.Multer.File;
                let path = file.path;
                var result = await uploadToCloudinary(path, 'Photos');
                images.push(result.url);
            }
        }
        await Product.create({
            ...input,
            images,
            location: user?.location,
            owner: user?._id,
        });
        return res.status(201).json({
            status: ResponseStatus.SUCCESS,
            message: 'Product posted',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Product filter
export const filterProducts = async (req: Request, res: Response) => {
    try {
        const condition: ProductConditionDto = req.body;
        const products = await Product.find({ ...condition }, [], {
            sort: { postedOn: -1 },
        });
        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Products fetched',
            products,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Get all products
export const getAllProducts = async (_req: Request, res: Response) => {
    try {
        const products = await Product.find({}, [], {
            sort: { postedOn: -1 },
        }).limit(15);
        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Products fetched',
            products,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Location based filtering of products
export const locationBasedProducts = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const user = await User.findById(req.user.id);
        const products = await Product.find({
            location: {
                $geoWithin: {
                    // @ts-ignore
                    $centerSphere: [user?.location.coordinates, 10 / 3963.2],
                },
            },
        });
        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Products fetched',
            products,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};

// Get all products posted by user
export const userProducts = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const id = req.user.id;
        const products = await Product.find({
            owner: id,
        });
        return res.status(200).json({
            status: ResponseStatus.SUCCESS,
            message: 'Products fetched',
            products,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: ResponseStatus.FAIL,
            errors: ['Internal server error'],
        });
    }
};
