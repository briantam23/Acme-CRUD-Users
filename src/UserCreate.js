import React, { Fragment, Component } from 'react';

class UserCreate extends Component {
    constructor () {
        super ();
        this.state = {
            name: '',
            error: ''
        }
        this.onCreate = this.onCreate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onCreate (ev) {
        ev.preventDefault();
        const { users, createUser } = this.props

        for(let i=0; i < users.length; i++) {
            if(users[i].name === this.state.name) {
                this.setState({ error: 'Error. User already in database.' })
                return;
            }
        }
        createUser({ name: this.state.name })
            .then(() => { this.props.history.push('/users') })
    }
    handleChange (ev) {
        this.setState({ name: ev.target.value })
    }
    render () {
        const { name, error } = this.state;
        const { onCreate, handleChange } = this;
        return (
            <div>
                <h2>Create User</h2>
                    <form onSubmit={ onCreate }>
                        <input value={ name } onChange={ handleChange } />
                        <button disabled={ !name }>Create</button>
                    </form>
                <h4>{ error }</h4>
            </div>
        )
    }
}

export default UserCreate;