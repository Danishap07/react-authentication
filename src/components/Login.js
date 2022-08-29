import React, { useState } from 'react'
import { useAuth } from '../utils/AuthContext';
// import { useNavigate } from 'react-router-dom'
// import { retrieveCookie } from '../utils/Cookies';
import { useForm } from 'react-hook-form'

const Login = () => {
    const [user, setUser] = useState({email:"", password:""})
    const { register, handleSubmit} = useForm()
    // const [cookie, setCookie] = useState({user})
    
    const auth = useAuth();
    // const navigate = useNavigate()

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     console.log(e);
        // setUser(e.target.value)
        // auth.login(cookie)
        // navigate('/')
        // console.log(e.target.value);
        // console.log(auth.login(user));
    // }

  return (
    <form onSubmit={handleSubmit((data) => {
        console.log(data);
    })}>
    <div className="title mx-5">
        <h1>Login</h1>
    </div>
    {/* <!-- Email input --> */}
    <div className="form-outline mb-4 mx-5 my-2">

        <label className="form-label" htmlFor="form2Example1">
            Email: {' '}
            <input type="email" {...register("email")} id="form2Example1" className="form-control" name='email' onChange={(e) => setUser(e.target.value)} />
        </label>
    </div>

    {/* <!-- Password input --> */}
    <div className="form-outline mb-4 mx-5">
        <label className="form-label" htmlFor="form2Example2">
            Password: {' '}
            <input type="password" {...register("password")} id="form2Example2" className="form-control" name='password' onChange={(e) => setUser(e.target.value)}/>
        </label>
    </div>
        <button type="submit" className="btn btn-primary btn-block mb-4 mx-5" >Login</button>

</form>
  )
}

export default Login