import React from 'react';

class UserView extends React.Component {
    render() {
        return (
            <div>
                Hello <strong>{this.props.name}</strong> and your email is <strong>{this.props.email}</strong>
            </div>
        )
    }
}

export default UserView;