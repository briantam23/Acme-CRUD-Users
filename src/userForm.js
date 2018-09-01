import React from 'react';

const userForm = (FormComponent) => {
    return class StatefulForm extends React.Component {
        constructor (props) {
            super (props);
            this.state = {
                name: '',
                error: ''
            }
            this.onCreate = this.onCreate.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.onUpdate = this.onUpdate.bind(this);
            this.fetchUser = this.fetchUser.bind(this);
            if(this.props.id) this.fetchUser(this.props.id);
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
            const { onCreate, handleChange, onUpdate } = this;
            return <FormComponent {...this.props} {...this.state} onCreate={ onCreate } handleChange={ handleChange } onUpdate={ onUpdate } />
        }
    }
}

export default userForm