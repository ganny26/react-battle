import React from 'react';
import Navigation from './navcomponent';

class Root extends React.Component{
    render(){
        return(
            <div>
                <Navigation/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>       
        )
    }
}

export default Root;