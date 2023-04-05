import React from 'react';
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import M from 'materialize-css';
import { validEmail } from './regex';
const Login = ()=>{
    const navigate = useNavigate();
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData=()=>{
        if(!validEmail.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password:password,
                email:email

            })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }
                else{
                    M.toast({html: "signed in",classes:"#43a047 green darken-1"})
                    navigate("/")
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    
    return(
        <div className='mycard'>
            <div className="card auth-card input-field">
                <h2 className='brand-logo'>Instagram</h2>
                <input
                type="text"
                placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="text"
                placeholder='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" 
                onClick={()=>PostData()}
                >
                    login
                </button>
                <h6>
                    <Link to='/Signup'>do not have an account?</Link>
                </h6>

            </div>
        </div>
    )
}

export default Login;