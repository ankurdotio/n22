import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./home.css"

const Home = () => {
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(response => {
                console.log(response.data)
            })
    }, [])

    const navigate = useNavigate()

    return (
        <main>

            <section
                className='home-section'
            >

                <header>
                    <button
                        onClick={() => {
                            navigate('/create-post')
                        }}
                        className='create-post-btn'>
                        create post
                    </button>
                </header>

                <div className="posts">

                    <div className="post">
                        <img src="https://images.unsplash.com/photo-1745563115146-aec349b7cadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat nobis voluptates rerum quasi temporibus.</p>
                        <button>like : 23</button>
                    </div>


                </div>
            </section>

        </main>
    )
}

export default Home