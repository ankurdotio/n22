import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSong } from '../redux/features/songSlice'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import './Upload.css'
import axios from 'axios'

const Upload = () => {
    const [ title, setTitle ] = useState('')
    const [ artist, setArtist ] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('title', title);
        formData.append('artist', artist);
        formData.append('chacha', document.querySelector('#_audioFile').files[0]); // Get the audio file from the input 
        // In a real app, you would upload the files to a server here
        // For now, we'll just add the song to the Redux store
        axios.post('http://localhost:3000/songs/upload', formData, {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data)
                navigate('/') // Redirect to home after upload
            })
    }


    return (
        <section className="upload-section">
            <div className="upload-header">
                <div className="back-button" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </div>
                <h1>Upload Music</h1>
            </div>
            <form className="upload-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Song Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Artist Name"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    required
                />
                <div className="upload-buttons">
                    <label className="upload-button">
                        Upload Audio File
                        <input
                            id='_audioFile'
                            type="file"
                            accept="audio/*"
                            required
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
                <button type="submit" className="submit-button">Upload Music</button>
            </form>

            <Navigation />
        </section>
    )
}

export default Upload