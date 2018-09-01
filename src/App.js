import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Users from './Users';
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';
import axios from 'axios';

class App extends Component {
    constructor () {
        super ();
        this.state = {
            users: []
        }
        this.destroyUser = this.destroyUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
    }
    componentDidMount () {
        axios.get('/api/users')
            .then(res => res.data)
            .then(users => this.setState({ users }));
    }
    createUser (user) {
        return axios.post('/api/users', user)
            .then(res => res.data)
            .then(user => this.setState({ users: [...this.state.users, user] }))
    }
    destroyUser (user) {
        return axios.delete(`/api/users/${user.id}`)
            .then(() => this.setState({
                users: this.state.users.filter(_user => _user.id !== user.id)
            }))
    }
    updateUser (user) {
        return axios.put(`/api/users/${user.id}`, user)
            .then(res => res.data)
            .then(user => {
                const users = this.state.users.map(_user => _user.id !== user.id ? _user : user)
                this.setState({ users: users })
            })
    }
    fetchUser (id) {
        return axios.get(`/api/users/${id}`)
            .then(res => res.data)
    }
    render () {
        const { users } = this.state;
        const { destroyUser, createUser, updateUser, fetchUser } = this;
        return(
            <Router>
                <div>
                    <h1>Acme CRUD Users</h1>
                    <Route path='/' render={ () => <Nav users={ users } /> } />
                    <Route exact path='/' render={ () => <Home users={ users } /> } />
                    <Route path='/users' render={ () => <Users users={ users } destroyUser={ destroyUser } /> } />
                    <Switch>
                        <Route path='/users/create' render={ ({ history, match }) => <UserCreate users={ users } history={ history } id={ match.params.id } updateUser={ updateUser } fetchUser={ fetchUser }  createUser={ createUser } /> } />
                        <Route path='/users/:id' render={ ({ history, match }) => <UserUpdate users={ users } history={ history } id={ match.params.id } updateUser={ updateUser } fetchUser={ fetchUser } createUser={ createUser } /> } />
                    </Switch>
                </div>                
            </Router>
        )
    }
}

export default App;