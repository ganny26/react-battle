
import React, { Component } from 'react';
import { Link } from 'react-router';


const Navigation = React.createClass ({
    render() {
        return (
            <div className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/">welcome</Link></li>
                </ul>
            </div>
        );
    }
})


export default Navigation;