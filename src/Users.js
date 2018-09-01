import React, { Fragment, Component } from 'react';

class Users extends Component {
    constructor () {
        super ();
        this.state = {
            users: []
        }
    }
    render () {
        const { users, destroyUser } = this.props;
        return (
            <Fragment>
                <ul>
                    {
                        users.map(user => <Fragment key={user.id}>
                            <hr />
                            <li>{ user.name }</li>
                            <br />
                            <button onClick={ () => destroyUser(user) }>X</button>
                        </Fragment>)
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Users;