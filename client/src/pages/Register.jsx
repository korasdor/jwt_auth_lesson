import React from 'react'
import { useAuthContext } from '../providers/AuthProvider'

const Register = () => {

    const { handleRegisterValueChange, handleRegister } = useAuthContext()

    return (
        <form onSubmit={handleRegister}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <input className="form-control" placeholder="Name" required
                onChange={e => handleRegisterValueChange(e, "name")}
            />

            <input type="email" className="form-control" placeholder="Email address" required
                onChange={e => handleRegisterValueChange(e, "email")}
            />

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => handleRegisterValueChange(e, "password")}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Register