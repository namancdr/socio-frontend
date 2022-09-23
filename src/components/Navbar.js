import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/auth/authContext'

const Navbar = () => {
    const navigate = useNavigate()
    const {isAuthenticated, setIsAuthenticated}= useAuth()

    const handleLogout = (e) => {
        e.preventDefault()
        setIsAuthenticated(false)
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
       <>
        <nav className="navbar navbar-expand-lg bg-light bg-transparent">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand text-light" href="/">Socio</a>
                    {!isAuthenticated ?
                    <form className="d-flex">
                        <Link to='/login' className="btn  mx-1 btn-primary" role="button">Login</Link>
                        <Link to='/signup' className="btn btn-primary mx-1" role="button">Signup</Link>
                    </form>:
                    <form className='d-flex'>  
                        <button onClick={handleLogout} className="btn btn-danger mx-1">Logout</button>
                    </form>  
                    }
             </div>
        </nav>
       </>
    )

}

export default Navbar