import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Protected = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/auth/me', {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(() => {
                navigate("/login")  // Redirect to login if not authenticated
            })

    }, [])
    return children
}

export default Protected