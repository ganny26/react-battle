import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import Welcome from '../components/welcome';
import About from '../components/about';
import Home from '../components/home';
import Navigation from '../components/navcomponent';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                <div>
                    <Route path="/" component={Navigation}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                </div>
                
                </Router>
            </div>
        )
    }
}

export default Routes;