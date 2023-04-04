import React from 'react';
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import M from 'materialize-css';



const Signup = ()=>{
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData=()=>{
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email

            })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }
                else{
                    M.toast({html: data.msg,classes:"#43a047 green darken-1"})
                    navigate("/signin")
                }
            })
        }
    

    return(
        <div className='mycard'>
            <div className="card auth-card input-field">
                <h2 className='brand-logo'>Instagram</h2>
                <input
                type="text"
                placeholder='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
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
                    signup
                </button>
                <h6>
                    <Link to='/Signin'>already have an account?</Link>
                </h6>

            </div>
        </div>
    )
}

export default Signup;