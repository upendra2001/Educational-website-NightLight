import './App.css';
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import LandingPage from "./components/home/LandingPage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPasswod'; 
import { useState, useEffect } from 'react'
import Article from './components/articles/Article';
import QuizMaker from './components/quizzes/QuizMaker';

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        let checkLogin = localStorage.getItem("loginToken")
        if(checkLogin)
        setLoggedIn(true)
    }, [])
    
    return (
        <Router>
            <div className="App">
                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                <Switch>
                    <Route exact path='/'>
                        <LandingPage/>
                    </Route>
                    <Route exact path='/login'>
                        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    </Route>
                    <Route exact path='/signup'>
                        <SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    </Route>
                    <Route exact path='/reset'>
                        <ResetPassword/>
                    </Route> 
                    <Route exact path='/articles'>
                        <Article/>
                    </Route>
                    <Route exact path='/quizmaker'>
                        <QuizMaker/>
                    </Route>
                </Switch>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;
