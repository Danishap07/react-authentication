import React from 'react'
import { useAuth } from '../utils/AuthContext'

const Navbar = () => {

    const auth = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Auth-Prac</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-right" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Profile</a>
                            </li>
                            {/* <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li> */}
                            {
                                !auth.user? (
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                ): <li className="nav-item">
                                <a className="nav-link" href="/login">Logout</a>
                            </li>
                            }
                            <li className="d-flex">
                                <a className="nav-link mx-6" href="/">
                                    {/* <pre>{JSON.stringify(auth.email)}</pre> */}
                                </a>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar