import React from "react";
import PostsPage from "./../PostContainer/PostsPage";
import Login from "../Login/Login";

// const authenticate = PostsPage => Login => props =>
//     class extends React.Component {
//         render() {
//             if (props.loggedIn) {
//                 return <PostsPage />;
//             } else {
//                 return <Login />;
//             }
//         }
//     }

// export default authenticate;

const authenticate = PostsPage => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        username: "",
        loggedIn: false
      };
    }

    componentDidMount() {
        this.loadLocalStorage();
    }

    loadLocalStorage = () => {
        if (localStorage.hasOwnProperty("username")) {
            let username = localStorage.getItem("username");

            username = JSON.parse(username);
            this.setState({
                username: username,
                loggedIn: true
            })
        }
    }

    login = () => {
        this.setState({
            loggedIn: true
        })

        localStorage.setItem("username", JSON.stringify(this.state.username));
    };

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
    
    render() {
      if (this.state.loggedIn) {
        return <PostsPage username={this.state.username} />;
      }
      return <Login login={this.login} handleChange={this.handleChange} />;
    }
  };

export default authenticate(PostsPage)(Login);
