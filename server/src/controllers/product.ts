import { Request, Response } from 'express';
import { PostProductDto } from '../dto';
import { Product } from '../models';
import uploadToCloudinary from '../utils/uploadToCloudinary';

// Post a product in the market place
export const postProduct = async (req: Request, res: Response) => {
    try {
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
        console.log(images);
        await Product.create({ ...input, images });
        return res.status(201).json({
            status: 'SUCCESS',
            message: 'Product posted',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'FAIL',
            errors: ['Internal server error'],
        });
    }
};

Find all products by category
export const getCategoryProducts = (req: Request, res: Response) => {
    try {
        const input: string = req.params.category;
    } catch (error) {}
};
