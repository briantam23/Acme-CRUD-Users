import React, { Fragment, Component} from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                <h2>Users</h2>
                <hr />
                <ul>
                    {
                        users.map(user => <li key={ user.id }>
                            <Link to={`/users/${user.id}`}>{ user.name }</Link>
                            <br />
                            <button onClick={ () => destroyUser(user) }>X</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Users;