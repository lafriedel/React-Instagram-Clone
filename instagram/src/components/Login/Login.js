import React from "react";
import Logo from "../../img/instagram-logo.png";
import AppStore from '../../img/apple-app-store.png';
import GooglePlay from '../../img/google-play-store.png';
import "./Login.css";

const Login = props => {
  return (
    <div className="login-page">
      <div className="login-container">
        <img className="login-ig-logo" src={Logo} />
        <form onSubmit={props.login} className="login-form">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={props.handleChange}
          />
          <input type="text" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
      </div>
      <p>Get the app.</p>
      <div className="app-buttons-container">
        <img src={AppStore} />
        <img src={GooglePlay} />
      </div>
    </div>
  );
};

export default Login;
