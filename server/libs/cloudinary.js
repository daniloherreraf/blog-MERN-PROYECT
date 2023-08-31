import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'docsxvkfw', 
  api_key: '441276733284225', 
  api_secret: '5BGWEl2Uqa47GwZzUtYTjrj_19I' 
});
          
export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "posts"
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}
