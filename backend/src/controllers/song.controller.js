import { uploadFile } from '../services/storage.service.js';
import songModel from '../models/song.model.js';


export async function upload(req,res) {
    

    const result= await uploadFile(req.file.buffer)
    const {artist, title} = req.body;

    const audioUrl = result.url;

    const song = await songModel.create({
        artist,
        title,
        audio: audioUrl,
    })

    res.status(201).json({
        message: "Song uploaded successfully",
        song: {
            id: song._id,
            title: song.title,
            artist: song.artist,
            audio: song.audio
        }
    })
    
}

export async function getSongs(req,res) {
    const songs = await songModel.find()

    res.status(200).json({
        message:"songs fetched successfully",
        songs:songs
    })
}

export async function getSongById(req,res){
    const songId =req.params.mama;


    const song =await songModel.findOne({
        _id: songId
    })

    res.status(200).json({
        message: "Song fetched successfully",
        song
    })
}

export async function searchSong(req,res){
    const text = req.query.text; // test

    const songs = await songModel.find({
        title:{
            $regex: text,
            $options: 'i' // case insensitive
        }
    })

    res.status(200).json({
        message: "Songs fetched successfully",
        songs: songs
    })
}