import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../css/auth/login.css";
import { handleNameError, handleEmailError, handlePasswordError } from "../common/validation";

export default function Login(props) {
    const { loggedIn, setLoggedIn } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [requiredError, setRequiredError] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleLogin = (e) => {

        e.preventDefault();
        (name === '' || email === '' || password === '') ? setRequiredError(true) : setRequiredError(false)
        // const loggedIn = localStorage.getItem("loginToken");
        // if (loggedIn) {
        //   setLoggedIn(true);
        // } else alert("wrong password or email");
    };

    if (loggedIn) return <Redirect to="/" />;

    return (
        <div>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginForm">  
                login
            </button> */}
            <div
                className="login-main"
                id="loginForm"
                tab-index="-1"
                role="dialog"
                aria-labelledby="loginFormLabel"
                aria-hidden="true"
            >
                <form className="container login-container">
                    <h2>Login</h2>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                id="inputName3"
                                placeholder="Enter Name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (!handleNameError(e.target.value)) setNameError("Enter valid name");
                                    else setNameError('');
                                }}
                            />
                            {
                                (nameError) ? <p>{nameError}</p> : null

                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (!handleEmailError(e.target.value)) setEmailError("Enter valid email");
                                    else setEmailError('');
                                }}
                                placeholder="Enter Email"
                            />
                            {
                                (emailError) ? <p>{emailError}</p> : null
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword3"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    if (!handlePasswordError(e.target.value)) setPasswordError("Password must be alphanumeric and it should be atleast of 8 characters");
                                    else setPasswordError('');
                                }}
                            />
                            {
                                (passwordError) ? <p>{passwordError}</p> : null
                            }
                        </div>
                    </div>
                    {


                        requiredError ?
                            <p className="required-error">
                                <span>Fill all details correctly&nbsp;&nbsp;</span>
                                <i className="far fa-times-circle required-error-icon" onClick={(e) => setRequiredError(false)} />
                            </p> : null

                    }

                    <button onClick={(e) => handleLogin(e)} className="login-button">
                        Login
                    </button>
                    <p className="dont-have-an-account">
                        Don't have an Account? <Link to="/signup">Register</Link>
                    </p>
                    <p className="forgot-password">
                        Forgot Password? <Link to="/reset">Reset</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
