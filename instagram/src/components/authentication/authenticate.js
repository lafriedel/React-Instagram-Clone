import React from 'react';

const authenticate = PassedComp => {

    class HOCClass extends React.Component {
        render() {
            return <PassedComp />;
        }
    }
}

export default authenticate;