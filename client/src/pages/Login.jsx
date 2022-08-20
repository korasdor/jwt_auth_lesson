import React from 'react'
import { useAuthContext } from '../providers/AuthProvider'

const Login = () => {

    const { handleLoginValueChange, handleLogin } = useAuthContext()

    return (
        <form onSubmit={handleLogin}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email address" required
                onChange={e => handleLoginValueChange(e, "email")}
            />

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => handleLoginValueChange(e, "password")}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
}

export default Login