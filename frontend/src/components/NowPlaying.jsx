import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentSong, selectIsPlaying, togglePlayPause } from '../redux/features/songSlice';
import './NowPlaying.css';

// Component accepts props for flexibility, but can also use Redux directly if no props provided
const NowPlaying = ({ currentSong: songProp, isPlaying: isPlayingProp, togglePlayPause: togglePlayPauseProp }) => {
    const dispatch = useDispatch();
    const reduxCurrentSong = useSelector(selectCurrentSong);
    const reduxIsPlaying = useSelector(selectIsPlaying);
    
    // Use props if provided, otherwise use Redux state
    const currentSong = songProp || reduxCurrentSong;
    const isPlaying = isPlayingProp !== undefined ? isPlayingProp : reduxIsPlaying;
    
    const handleTogglePlayPause = () => {
        if (togglePlayPauseProp) {
            togglePlayPauseProp();
        } else {
            dispatch(togglePlayPause());
        }
    };

    return (
        <div className="now-playing">
            <img 
                src={currentSong.image} 
                alt={currentSong.title} 
                className="now-playing-image" 
            />
            <div className="now-playing-details">
                <div className="now-playing-title">{currentSong.title}</div>
                <div className="now-playing-artist">{currentSong.artist}</div>
            </div>
            <button className="play-button" onClick={handleTogglePlayPause}>
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                )}
            </button>
        </div>
    );
}

export default NowPlaying;
