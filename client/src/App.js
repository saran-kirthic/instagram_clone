import React from 'react';
import NavBar from './components/navbar';
import "./App.css";
// import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/screens/home';
import Signin from './components/screens/login';
import Profile from './components/screens/profile';
import Signup from './components/screens/signup';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route path="/Signin" element={<Signin />}>
      </Route>
      <Route path="/Profile" element={<Profile />}>
      </Route>
      <Route path="/Signup" element={<Signup />}>
      </Route>
      </Routes>
      
    </BrowserRouter>
);
}

export default App;
