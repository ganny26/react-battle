import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory, Link } from 'react-router';
import Welcome from '../components/welcome';
import About from '../components/about';
import Home from '../components/home';
import Navigation from '../components/navcomponent';
import Root from '../components/root';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <div>
                        <Route path="/" component={Root}>
                            <IndexRoute component={Welcome}/>
                            <Route path="/about" component={About}></Route>
                            <Route path="/home" component={Home}></Route>
                        </Route>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes;