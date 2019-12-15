import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <React.Fragment>
        <h1>Oops1 Page not found!</h1>

        <Link to="/">Go back to Home</Link>
        </React.Fragment>
    );
}

export default Error;