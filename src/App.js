import './App.css';
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import LandingPage from "./components/home/LandingPage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPasswod';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <LandingPage />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/signup'>
                        <SignUp />
                    </Route>
                    <Route exact path='/reset'>
                        <ResetPassword />
                    </Route>
                    <Route exact path='/about'>
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
