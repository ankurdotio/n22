import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.IMAGEKIT_PUBLIC_KEY)

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});


export function uploadFile(file, fileName) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file,
            fileName: "audio-file-" + Date.now() + ".mp3",
            folder: "/audio-files/"
        }, function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}