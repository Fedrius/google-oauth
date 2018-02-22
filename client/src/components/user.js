import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

    async getUser(){
        const user = await axios.get('/api/current-user');

        console.log('current usr', user.data);
    };

    async logOut(){
        const result = await axios.get('/api/logout');

        console.log('loggedout', result.data);
    };

    async isUser(){
        const info = await axios.get('/api/is-user');

        console.log('this is user', info.data);
    }

    render(){
        return (
            <div>
                <h1>USER</h1>
                <a href="/auth/google">Log in with the Google</a>
                <hr/>
                <button onClick={this.getUser}>get user info</button>
                <button onClick={this.logOut}>logout</button>
            </div>
        )
    }
}

export default User;