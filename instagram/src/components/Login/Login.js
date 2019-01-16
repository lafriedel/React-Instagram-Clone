import React from 'react';

const Login = props => {
    return (
        <form onSubmit={props.login}>
            <input type="text" placeholder="username" onChange={props.handleChange} />
            <input type="text" placeholder="password" onChange={props.handleChange} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;