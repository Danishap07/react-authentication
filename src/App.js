import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Home from './components/Home';
import { AuthProvider } from './utils/AuthContext';
import { MockApi } from './constants/MockData';
// import FetchApi from './constants/FetchApi';
import Create from './utils/Create';
import Read from './utils/Read';
import GetApi from './apiFiles/GetApi';


const App = () => {
  return (
    
      <AuthProvider >
      <Navbar/>
      <Routes>
        <Route path='/author' element={<MockApi/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='profile' element={<Profile/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/getapi' element={<GetApi/>}/>
      </Routes>
      </AuthProvider>
  )
}

export default App