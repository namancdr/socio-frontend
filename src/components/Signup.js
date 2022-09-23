import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth/authContext'

const Signup = () => {

    const{createUser} = useAuth()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const {name, email, username, password, cpassword} = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(cpassword === password){
           await createUser(formData)
            navigate('/')
        }else{
            console.log('Password do not match!')
        }
    }

  return (
<div className='container' style={{marginTop: "80px"}}>
        <h2>Signup</h2>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' aria-describedby="name" 
                 value={name} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name='username' aria-describedby="username" 
                 value={username} onChange={handleChange} required/>
                <div id="emailHelp" className="form-text">Choose a unique Username.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" 
                value={email} onChange={handleChange} required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="password" 
                value={password} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" 
                value={cpassword} onChange={handleChange} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup