import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar'
import Home from './pages/Home'

function App() {
    return (
        <div className='app'>
            <div>
                <NavBar />
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
