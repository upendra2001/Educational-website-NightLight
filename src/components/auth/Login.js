import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/auth/login.css'

export default function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(name)
    }



    return (
        <div className="login-main">
            <form className="container login-container">
                <h2>Login</h2>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={name} id="inputName3" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" />
                    </div>
                </div>
                <button onClick={(e) => handleLogin(e)} className="login-button">Login</button>
                <p>Don't have an Account? <Link to='/signup'>Register</Link></p>
                <p>Forgot Password? <Link to='/reset'>Reset</Link></p>

            </form>
        </div>
    )
}
