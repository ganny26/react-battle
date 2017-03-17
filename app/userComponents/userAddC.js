import React from 'react';
import UserView from './userView';

const User = React.createClass({

    getInitialState() {
        return {
            name: 'Selva',
            email: 'selvaganesh@gmail.com'
        }
    },

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    },

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    },


    render() {
        return (
            <div>
                <h2>User</h2><hr />
                <div>
                    <label>Name</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.handleName} />
                    <br /><hr />
                    <label>Email</label>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.handleEmail} /><br /></div>
                <hr />
                <UserView name={this.state.name} email={this.state.email} />
            </div>
        )
    }
});


export default User;