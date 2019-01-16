import React from 'react';
import PostsPage from './../PostContainer/PostsPage';
import Login from '../Login/Login';

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
                loggedIn: false
            }
        }

        componentDidMount() {

        }

        render() {
            if (this.state.loggedIn) {
                return <PostsPage />;
            }
            return <Login />;
        }
    }

export default authenticate(PostsPage)(Login);