import React, { Fragment, Component } from 'react';
import userForm from './userForm';

const UserUpdate = ({ users, history, createUser, id, updateUser, fetchUser, name, error, onUpdate, handleChange }) => {
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

export default userForm(UserUpdate);