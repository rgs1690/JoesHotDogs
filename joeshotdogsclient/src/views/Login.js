import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { signInUser } from '../api/auth/auth';
export default function Login(){
    return (
        <div>
          <h1>Welcome! Sign In!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >SIGN IN </button>
        </div>
    )
}