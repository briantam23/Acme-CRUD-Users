import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Users from './Users';
import UserCreate from './UserCreate';
import axios from 'axios';

class App extends Component {
    constructor () {
        super ();
        this.state = {
            users: []
        }
        this.destroyUser = this.destroyUser.bind(this);
    }
    componentDidMount () {
        axios.get('/api/users')
            .then(res => res.data)
            .then(users => this.setState({ users }));
    }
    destroyUser (user) {
        return axios.delete(`/api/users/${user.id}`)
            .then(() => this.state.users.filter(_user => _user.id !== user.id))
    }
    render () {
        const { users } = this.state;
        const { destroyUser } = this;
        return(
            <Router>
                <Fragment>
                    <h1>Acme CRUD Users</h1>
                    <Route path='/' render={ () => <Nav users={ users } /> } />
                    <Route path='/' render={ () => <Home /> } />
                    <Route path='/users' render={ () => <Users users={ users } destroyUser={ destroyUser } /> } />
                </Fragment>                
            </Router>
        )
    }
}

export default App;