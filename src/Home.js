import React, { Fragment } from 'react';
import { userInfo } from 'os';

const Home = ({ users }) => {
    return (
        <Fragment>
            <h2>Home</h2>
            <hr />
            <h3>Welcome to Acme Users! We have { users.length } users!</h3>
        </Fragment>
    )
}

export default Home;