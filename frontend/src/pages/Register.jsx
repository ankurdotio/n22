import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    function handleRegister(event){
        event.preventDefault()

        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value

        axios.post("http://localhost:3000/auth/register",{
            username,password
        },{
            withCredentials: true,
        }).then(response=>{
            console.log(response.data)
            // Redirect to login page after successful registration
            navigate("/")
        })
        
    }
    
    return (
        <section className="register-section">

            <h1>Sound stream</h1>

            <div className="middle">

                <h1>create new account</h1>

                <form onSubmit={handleRegister} action="">
                    <input id="username" type="text" placeholder='Username' />
                    <input id="password" type="password" placeholder='Password' />
                    <input type="submit" value={"Register"} />
                </form>

            </div>

            <p>already have an account ? <Link to="/login">Login</Link></p>

        </section>
    )
}

export default Register