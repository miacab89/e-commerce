import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CheckOut from './components/CheckOut';
import Navbar from './components/Navbar';
import "gestalt/dist/gestalt.css"; 

import registerServiceWorker from './registerServiceWorker';



const Root = () => (
    <BrowserRouter>
    <React.Fragment>
        <Navbar/>
        <Switch>
            <Route component={App} exact path="/" />
            <Route component={SignIn} exact path="/signin" />
            <Route component={SignUp} exact path="/signup" />
            <Route component={CheckOut} exact path="/checkout" />
        </Switch>
        
    </React.Fragment>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
