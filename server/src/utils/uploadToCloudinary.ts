import cloudinary from './cloudinary';

const uploadToCloudinary = async (path: string, imageFolder: string) => {
    try {
        var folder = 'DIGI_BART';
        var filePath = `${folder}/${imageFolder}/${path}`;
        const result = await cloudinary.uploader.upload(path, {
            public_id: filePath,
        });
        return {
            message: 'Success',
            url: result.url,
        };
    } catch (error) {
        console.error(error);
        process.exit(-1);
    }
};

export default uploadToCloudinary;
