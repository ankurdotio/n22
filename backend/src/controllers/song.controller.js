import { uploadFile } from '../services/storage.service.js';



export async function upload(req,res) {
    

    const result= await uploadFile(req.file.buffer)

    res.send(result)
    
    
}