const cloudinary = require('cloudinary').v2


exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
    const options = {folder};
    if(height) {
        options.height = height;
    }
    if(quality) {
        options.quality = quality;
    }
    // The resource_type property is set to "auto", 
    // which allows Cloudinary to automatically detect the resource type (image or video) based on the file's content.
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}