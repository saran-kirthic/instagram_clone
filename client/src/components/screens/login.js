import React,{useState,useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { UserContext} from '../../App';
import M from 'materialize-css';
import { validEmail } from './regex';
const Login = ()=>{
    const {state,dispatch}=useContext(UserContext)
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
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    dispatch({type:"USER",payload:data.user})
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
                <h2 className='brand-logo'>Trendogram</h2>
                <input
                type="text"
                placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="password"
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