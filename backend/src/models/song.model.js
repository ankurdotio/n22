import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true,
        unique:true,
    },
    artist:{
        required:true,
        type:String,
    },
    poster:{
        type:String,
        default:"https://discussions.apple.com/content/attachment/592590040"
    },
    audio:{
        type:String,
        required:true,
    }
})

const songModel = mongoose.model("song", songSchema);


export default songModel;   