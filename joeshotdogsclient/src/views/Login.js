import React from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import { signInUser } from '../api/auth/auth';
export default function Login({ user }){
    return (
        <div>
          {user === null ? (
            <>
            <h2>...loading</h2>
            </>
          ) : (
            <>
          <h1>Welcome! Sign In!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >SIGN IN </button>
          </>
          )}

          </div>
        
    )
}
Login.propTypes = {
  user: PropTypes.node
}
Login.defaultProps = {
  user : null,
}