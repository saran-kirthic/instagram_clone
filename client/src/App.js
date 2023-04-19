import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/navbar';
import "./App.css";
// import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
import Home from './components/screens/home';
import Signin from './components/screens/login';
import Profile from './components/screens/profile';
import Signup from './components/screens/signup';
import CreatePost from './components/screens/createPost';
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = ()=>{
  const navigate = useNavigate();
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      //navigate('/')
    }else{
      navigate('/Signin')
    }
  },[])
  return(
    <switch>
      <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route path="/Signin" element={<Signin />}>
      </Route>
      <Route path="/Profile" element={<Profile />}>
      </Route>
      <Route path="/Signup" element={<Signup />}>
      </Route>
      <Route path="/createPost" element={<CreatePost />}>
      </Route>
      </Routes>
    </switch>
  )
}

function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />      
    </BrowserRouter>
    </UserContext.Provider>
);
}

export default App;
