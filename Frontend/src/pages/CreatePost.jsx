import React from 'react'
import "./createpost.css"
const CreatePost = () => {
    return (
        <main>

            <section className="create-post">

                <form action="">

                    <input
                        type="text"
                        placeholder='enter image url'
                    />

                    <input type="text"
                        placeholder='enter post caption'
                    />

                    <button className='create-post-btn'>create post</button>


                </form>

            </section>

        </main>
    )
}

export default CreatePost