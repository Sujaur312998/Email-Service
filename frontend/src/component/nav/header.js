import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory , withRouter} from "react-router-dom"



const Header = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')

    const [state, setstate] = useState()

    const logout = () => {
        localStorage.clear()
        history.push('/signin')
    }
    useEffect(() => {
        if(token===null){
            setstate(false)
        }else{
            setstate(true)
        }
    },[state])
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark " >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <strong>Email Service</strong>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                token ?
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
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Header)