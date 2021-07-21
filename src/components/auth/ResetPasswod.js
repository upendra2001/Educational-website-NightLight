import React, { useState } from 'react'
import '../../css/auth/resetPassword.css'

export default function ResetPassword() {
    const [email, setEmail] = useState('')

    const handleReset = (e) => {
        e.preventDefault();
        // console.log(name)
    }



    return (
        <div className="reset-main">
            <form className="container reset-container">
                <h2>Login</h2>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" />
                    </div>
                </div>
                <button onClick={(e) => handleReset(e)} className="reset-button">Reset</button>
            </form>
        </div>
    )
}
