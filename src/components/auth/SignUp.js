import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../css/auth/signUp.css'

export default function SignUp(props) {

    const {
        loggedIn, 
        setLoggedIn
    } = props

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('+91 ')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault();
        let data = phone+email+password+confirmPassword+name; 
        localStorage.setItem("loginToken", data);
        setLoggedIn(true);
    }


    if(loggedIn)return <Redirect to='/'/>
    return (
       
        <div className="signUp-main">
            <form className="container signUp-container">
                <h2>Sign - Up</h2>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={name} id="inputName3" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="telephone" className="form-control" value={phone} id="inputPhone3" placeholder="Enter Phone Number" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm</label> 
                    <div className="col-sm-10 ">
                        <input type="password" className="form-control" id="inputConfirmPassword3" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
                    </div>
                </div>
                <button onClick={(e) => handleSignUp(e)} className="signUp-button">Register</button>
                <p>Already have an Account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    )
}
