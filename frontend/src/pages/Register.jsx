import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
    return (
        <section className="register-section">

            <h1>Sound stream</h1>

            <div className="middle">

                <h1>create new account</h1>

                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="submit" value={"Register"} />
                </form>

            </div>

            <p>already have an account ? <Link to="/login">Login</Link></p>

        </section>
    )
}

export default Register