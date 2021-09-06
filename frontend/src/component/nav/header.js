import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { userAuthenticate } from '../../redux/auth/authAction'

const Header = () => {
    /*     const history = useHistory()
        const state = useSelector(state => state.authReducer.authenticate)
        const dispatch = useDispatch()
        
        const logout = () => {
            localStorage.clear()
            history.push('/signin')
            dispatch(userAuthenticate(false))
        } */
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark " >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <strong>Admin Dashboard</strong>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* {
                                state ?

                                    <li className="nav-item">
                                        <nav className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>SignOut</nav>
                                    </li>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signin">Signin</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signup">Registration</NavLink>
                                        </li>
                                    </>
                            } */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin">Signin</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Registration</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header