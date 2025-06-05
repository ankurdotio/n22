import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <section className="login-section">

            <h1>Sound stream</h1>

            <div className="middle">

                <h1>Welcome back</h1>

                <form action="">
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="submit" value={"Login"} />
                </form>

            </div>

            <p>create an account <Link to="/register">register</Link></p>

        </section>
    )
}

export default Login