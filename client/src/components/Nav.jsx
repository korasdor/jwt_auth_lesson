import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider';

const Nav = () => {

    const { logged, handleLogout } = useAuthContext()

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <div>
                    {
                        logged ?
                            (
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item active">
                                        <Link to="/login" className="nav-link" onClick={handleLogout}>Logout</Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item active">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                                </ul>
                            )
                    }

                </div>
            </div>
        </nav>
    )
}

export default Nav