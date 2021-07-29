import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../css/auth/login.css'

export default function Login(props) {

    const {
        loggedIn,
        setLoggedIn,
        loginClicked,
        setLoginClicked
    } = props

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [launch, setLaunch] = useState(true)
    const [nameError, setNameError] = useState('')
    // const [loggedIn, setLoggedIn] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginClicked(true);
        const loggedIn = localStorage.getItem("loginToken")
        if (loggedIn) {
            setLoggedIn(true);
        }
        else alert("wrong password or email")
    }

    if (loggedIn)
        return <Redirect to='/' />

    return (
        <div>
            <div id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={`${!launch ? "true" : "false"}`} aria-modal={`${launch ? "role" : ''}`} dialog={`${launch ? "role" : ''}`} className={`modal fade beforetestlogin ${launch ? "testlogin show" : ''}`} >
                <div className="modal-dialog login-modal-dialog">
                    <div className="modal-content">
                        {/* <div className="modal-header"> */}
                        {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        {/* <i class="fas fa-times" onClick={() => setLaunch(false)}></i> */}
                        {/* </div> */}
                        <div className="modal-body"></div>


                        <div className="login-main" id="loginForm" tab-index="-1" role="dialog" aria-labelledby="loginFormLabel" aria-hidden="true">
                            <form className="container login-container">
                                <h2>Login</h2>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" value={name} id="inputName3" placeholder="Enter Name" onChange={(e) => {
                                            setName(e.target.value);
                                            let tname = e.target.value;

                                            let flag = true;
                                            for (let i = 0; i < tname.length; i++) {
                                                if (!tname[i].match(/^[a-zA-Z]+$/) || tname[i] !== ' ') {
                                                    flag = false; break;
                                                }
                                            }
                                            if (!flag) setNameError("Enter valid name");
                                            else setNameError('');
                                        }} />
                                        {
                                            (nameError) ? <p>{nameError}</p> : null

                                        }

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" >Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <button onClick={(e) => handleLogin(e)} className="login-button">Login</button>
                                <p>Don't have an Account? <Link to='/signup'>Register</Link></p>
                                <p>Forgot Password? <Link to='/reset'>Reset</Link></p>

                            </form>
                        </div>


                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setLaunch(false)}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>


    )
}
