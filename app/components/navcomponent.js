
import React, { Component } from 'react';
import { Link } from 'react-router';


const Navigation = React.createClass ({
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="about">about</Link></li>
                    <li><Link to="home">home</Link></li>
                    <li><Link to="/">welcome</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
})


export default Navigation;