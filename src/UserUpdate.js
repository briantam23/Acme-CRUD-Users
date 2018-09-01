import React, { Fragment, Component } from 'react';

class UserUpdate extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: '',
            error: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.fetchUser(this.props.id)
    }
    handleChange (ev) {
        this.setState({ name: ev.target.value })
    }
    onUpdate (ev) {
        ev.preventDefault();
        const { updateUser, users, id, history } = this.props;

        for(let i=0; i < users.length; i++) {
            if(users[i].name === this.state.name) {
                this.setState({ error: 'Error. User already in database.' })
                return;
            }
        }
        updateUser({ id, name: this.state.name })
            .then(() => history.push('/users'))
    }
    fetchUser (id) {
        this.props.fetchUser(id)
            .then(user => this.setState({ name: user.name }))
    }
    componentDidUpdate (prevProps) {
        if(prevProps.id !== this.props.id) {
            this.fetchUser(this.props.id)
        }
    }
    render () {
        const { name, error } = this.state;
        const { onUpdate, handleChange} = this;
        return (
            <div>
                <h2>Update User</h2>
                <form onSubmit={ onUpdate }>
                    <input value={ name } onChange={ handleChange }/>
                    <button disabled={ !name }>Update</button>
                </form>
                <h3>{ error }</h3>
            </div>
        )
    }
}

export default UserUpdate;