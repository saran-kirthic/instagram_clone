import React from 'react';

const login = ()=>{
    return(
        <div>
            <div className="card">
                <h2>instagram</h2>
                <input
                type="text"
                placeholder='email'
                />
                <input
                type="text"
                placeholder='password'
                />
                <button class="btn waves-effect waves-light" type="submit" name="action">
                    Submit
                </button>

            </div>
        </div>
    )
}

export default login;