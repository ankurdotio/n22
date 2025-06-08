import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../components/Navigation'
import './Search.css'
import NowPlaying from '../components/NowPlaying'
import { searchSongs, setCurrentSong, togglePlayPause, selectFilteredSongs, selectCurrentSong, selectIsPlaying } from '../redux/features/songSlice'

const Search = () => {
    const dispatch = useDispatch();
    const filteredSongs = useSelector(selectFilteredSongs);
    const currentSong = useSelector(selectCurrentSong);
    const isPlaying = useSelector(selectIsPlaying);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        dispatch(searchSongs(query));
    };

    const handlePlaySong = (song) => {
        dispatch(setCurrentSong(song));
    };

    return (
        <section className="search-section">
            <div className="search-header">
                <h1>Search</h1>
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search for songs or artists..." 
                        value={searchQuery}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
            </div>
            <div className="search-content">
                {filteredSongs.length > 0 ? (
                    <div className="song-list">
                        {filteredSongs.map(song => (
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
                ) : searchQuery ? (
                    <p>No results found for "{searchQuery}"</p>
                ) : (
                    <p>Type something to search for songs or artists</p>
                )}
            </div>

            {/* Now Playing component */}
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

export default Search