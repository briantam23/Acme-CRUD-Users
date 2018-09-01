import React, { Fragment, Component } from 'react';
import userForm from './userForm';

const UserCreate = ({ users, history, createUser, id, updateUser, fetchUser, name, error, onCreate, handleChange }) => {
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

export default userForm(UserCreate);