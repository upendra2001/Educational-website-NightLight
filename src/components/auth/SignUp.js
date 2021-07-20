import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/auth/signUp.css'

export default function SignUp() {

    const [name, setName] = useState('') 
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault();
        // console.log(name)
    }



    return (
        <div className="signUp-main">
            <form className="container signUp-container">
                <h2>Sign - Up</h2>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={name} id="inputName3" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="telephone" className="form-control" id="inputPhone3" placeholder="Enter Phone Number" />
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" />
                    </div>
                </div>
                <div className="form-group row signUp-input">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputConfirmPassword3" placeholder="Enter Password" />
                    </div>
                </div>
                <button onClick={(e)=> handleSignUp(e)} className="login-button">Register</button>
                <p>Already have an Account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    )
}
