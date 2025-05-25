import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./home.css"

const Home = () => {

    const [ posts, setPosts ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        axios.get("http://localhost:3000/posts")
            .then(response => {
                console.log(response.data.posts)
                setPosts(response.data.posts)
            })

    }, [])


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

                    {
                        posts.map(post => {
                            return (
                                <div className="post">
                                    <img src={post.imageUrl} alt="" />
                                    <p> {post.caption}</p>
                                    <button>like : {post.likeCount}</button>
                                </div>
                            )
                        })
                    }


                </div>
            </section>

        </main>
    )
}

export default Home