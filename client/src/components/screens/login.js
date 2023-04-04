import React from 'react';
import {Link} from 'react-router-dom';
const login = ()=>{
    return(
        <div className='mycard'>
            <div className="card auth-card input-field">
                <h2 className='brand-logo'>Instagram</h2>
                <input
                type="text"
                placeholder='email'
                />
                <input
                type="text"
                placeholder='password'
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action">
                    login
                </button>
                <h6>
                    <Link to='/Signup'>do not have an account?</Link>
                </h6>

            </div>
        </div>
    )
}

export default login;