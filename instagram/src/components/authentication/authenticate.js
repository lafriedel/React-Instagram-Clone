import React from 'react';

const authenticate = PassedComp => {

    class extends React.Component {
        render() {
            return <PassedComp />;
        }
    }
}

export default authenticate;