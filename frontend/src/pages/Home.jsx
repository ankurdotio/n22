import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import Navigation from '../components/Navigation'
import NowPlaying from '../components/NowPlaying'
import { setCurrentSong, togglePlayPause, selectSongs, selectCurrentSong, selectIsPlaying } from '../redux/features/songSlice'
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch();
    const songs = useSelector(selectSongs);
    const currentSong = useSelector(selectCurrentSong);
    const isPlaying = useSelector(selectIsPlaying);

    const handlePlaySong = (song) => {
        dispatch(setCurrentSong(song));
    };

    return (
        <section className="home-section">
            {/* Header with Stream title and search icon */}
            <div className="app-header">
                <h1 className="app-title">Stream</h1>
                <Link to="/search" className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </Link>
            </div>

            {/* Song list */}
            <div className="song-list">
                {songs.map(song => (
                    <div 
                        key={song.id} 
                        className="song-item" 
                        onClick={() => handlePlaySong(song)}
                    >
                        <img 
                            src={song.image} 
                            alt={song.title} 
                            className="song-image" 
                        />
                        <div className="song-details">
                            <div className="song-title">{song.title}</div>
                            <div className="song-artist">{song.artist}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Now Playing bar at the bottom */}
            <NowPlaying 
                currentSong={currentSong} 
                isPlaying={isPlaying} 
                togglePlayPause={() => dispatch(togglePlayPause())} 
            />

            {/* Navigation bar */}
            <Navigation />
        </section>
    )
}

export default Home