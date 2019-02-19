import React from "react";
import Logo from "../../img/instagram-logo.png";
import AppStore from '../../img/apple-app-store.png';
import GooglePlay from '../../img/google-play-store.png';
// import "./Login.css";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  border: 1px solid lightgrey;
  background: white;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 15px 30px;
  margin-bottom: 25px;

  img {
    width: 180px;
    margin-bottom: 10px;
  }
`;

const LoginForm = styled.form`
  width: 90%;

  input[type=text] {
    padding: 10px;
    margin-bottom: 10px;
    background: whitesmoke;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 100%;

    &:focus {
      outline: none;
      border: 1px solid grey;
    }
  }

  button {
    padding: 8px;
    background: dodgerblue;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const GetApps = styled.div`
  margin-top: 25px;

  img {
    width: 130px;
    margin: 0 4px;
  }
`;

const Login = props => {
  return (
    <LoginPage>
      <LoginContainer>
        <img className="login-ig-logo" alt="Instagram script logo" src={Logo} />
        <LoginForm onSubmit={props.login}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={props.handleChange}
          />
          <input type="text" placeholder="Password" />
          <button type="submit">Log in</button>
        </LoginForm>
      </LoginContainer>
      <p>Get the app.</p>
      <GetApps>
        <img alt="Apple App Store button" src={AppStore} />
        <img alt="Google Play button" src={GooglePlay} />
      </GetApps>
    </LoginPage>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  handleChange: PropTypes.func
}

export default Login;
