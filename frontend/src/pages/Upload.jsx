import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSong } from '../redux/features/songSlice'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import './Upload.css'

const Upload = () => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [_audioFile, setAudioFile] = useState(null) // Prefix with _ to ignore unused var warning
    const [imageFile, setImageFile] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real app, you would upload the files to a server here
        // For now, we'll just add the song to the Redux store
        const newSong = {
            id: Date.now(), // temporary ID generation
            title,
            artist,
            // Using a placeholder image if no image is selected
            image: imageFile ? URL.createObjectURL(imageFile) : "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop"
        }
        dispatch(addSong(newSong))
        navigate('/')
    }

    const handleAudioUpload = (e) => {
        const file = e.target.files[0]
        if (file && file.type.startsWith('audio/')) {
            setAudioFile(file)
        }
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file && file.type.startsWith('image/')) {
            setImageFile(file)
        }
    }

    return (
        <section className="upload-section">
            <div className="upload-header">
                <div className="back-button" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
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
                            type="file"
                            accept="audio/*"
                            onChange={handleAudioUpload}
                            required
                            style={{ display: 'none' }}
                        />
                    </label>
                    <label className="upload-button">
                        Upload image File
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
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