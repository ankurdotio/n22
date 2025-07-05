import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault()

        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value

        axios.post("http://localhost:3000/auth/login",
            {
                username, password
            },
            {
                withCredentials: true,
            }).then(response => {
                console.log(response.data)
                navigate("/")
            })

    }

    return (
        <section className="login-section">

            <h1>Sound stream</h1>

            <div className="middle">

                <h1>Welcome back</h1>

                <form onSubmit={handleLogin} action="">
                    <input id='username' type="text" placeholder='Username' />
                    <input id='password' type="password" placeholder='Password' />
                    <input type="submit" value={"Login"} />
                </form>

            </div>

            <p>create an account <Link to="/register">register</Link></p>

        </section>
    )
}

export default Login