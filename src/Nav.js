import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ users }) => {
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users ({ users.length })</Link></li>
                <li><Link to='/users/create'>Add a User</Link></li>
            </ul>
        </div>
    )
}

export default Nav;