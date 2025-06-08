import React from 'react'
import Navigation from '../components/Navigation'
import './Upload.css'

const Upload = () => {
    return (
        <section className="upload-section">
            <div className="upload-header">
                <h1>Upload</h1>
            </div>
            <div className="upload-content">
                {/* Upload content goes here */}
                <p>Upload functionality will be implemented here</p>
            </div>
            
            {/* Navigation bar */}
            <Navigation />
        </section>
    )
}

export default Upload