// import { upload } from '../db/index.mjs';
import { v2 as cloudinary } from 'cloudinary';
import { ENV } from '../../../constants/index.mjs';
import fsExtra from 'fs-extra';
import sharp from 'sharp';

// Configuration
cloudinary.config({
    cloud_name: ENV.ClOUD_NAME,
    api_key: ENV.API_KEY,
    api_secret: ENV.API_SECRET_KEY
});
const uploadFile = async (file) => {
    return new Promise((resolve, reject) => {
        const resizePath= `${dir}/resize-${file.filename}`
        const filePath = `src/modules/upload/files/${file.filename}`;
        sharp(filePath)
            .png({ quality: 50 })
            .toFile(resizePath, async (err, info) => {
                cloudinary.uploader.upload(resizePath,
                    {
                        folder: "smit-images",
                        public_id: file.filename
                    },
                    function (error, result) {
                        if (error) {
                            reject(error)
                            return;
                        }
                        fsExtra.removeSync(filePath)
                        resolve(result)
                    });

            })

    })
}


export default uploadFile;

