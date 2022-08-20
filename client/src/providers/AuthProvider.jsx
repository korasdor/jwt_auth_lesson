import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [logged, setLogged] = useState(false)
    const [registerFormData, setRegisterFormData] = useState({
        name: "", email: "", password: ""
    })

    const [loginFormData, setLoginFormData] = useState({
        email: "", password: ""
    })

    const [user, setUser] = useState({})

    const handleRegisterValueChange = (e, name) => {
        setRegisterFormData((prevState => ({ ...prevState, [name]: e.target.value })))
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        const response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: registerFormData["name"],
                email: registerFormData["email"],
                password: registerFormData["password"],
            })
        })

        const content = await response.json()
        console.log(content)

        navigate("/login")
    }

    const handleLoginValueChange = (e, name) => {
        setLoginFormData((prevState => ({ ...prevState, [name]: e.target.value })))
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        const response = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({
                email: loginFormData["email"],
                password: loginFormData["password"],
            })
        })

        const content = await response.json()
        console.log(content)

        setLogged(true)

        navigate("/")
    }

    const handleLogout = async (e) => {
        const response = await fetch("http://127.0.0.1:8000/api/logout", {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            credentials: "include"
        })

        const content = await response.json()
        console.log(content)

        setLogged(false)

        setUser({})
    }

    const getUser = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        })

        if (response.ok) {
            setLogged(true)
        }

        console.log(response.status)

        const content = await response.json()
        console.log(content)

        setUser(content)
    }

    const contextValue = {
        registerFormData,
        loginFormData,
        user,
        logged,

        handleRegisterValueChange,
        handleRegister,

        handleLoginValueChange,
        handleLogin,

        handleLogout,

        getUser

    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider