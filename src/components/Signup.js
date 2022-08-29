import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import ValidationInfo from '../utils/ValidationInfo'
import axios from 'axios'

const Signup = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(errors)
  const onSubmit = (data) => {
    console.log(data);
  }
  // const url = "https://swapi.dev/api/people/?page=2"



  return (
    <form className='mx-5' onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign-up</h1>
      <div className="form-group my-3">
        <label htmlFor="username">Username</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "username must be atleast 3 characters"
            },
            maxLength: {
              value: 30,
              message: "atmust 30 characters"
            },

          }

          )}
          placeholder='Username'
          type="text"
          name='username'
          className="form-control my-1"
        />
        {errors.username?.message}
      </div>
      <div className="form-group my-3">
        <label >Email</label>
        <input
          {...register("email", {
            required: "email is required!",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email!"
            },
            // validate: (value) => {
            //       (!(emailExists?.exists ?? false) ||
            //           "This email address is already in use") &&
            //       (validator.isEmail(value) || "Enter a valid email address")}
            // validate: {
            // positive: value => parseInt(value) > 0,
            // lessThanTen: value => parseInt(value) < 10,
            // asyncValidate:   async (dispatch) => {
            //   const api = dispatch({ type: "CHECK_VALID_USER_STARTS" })
            //   try {
            //     const res = await axios.get(`${'https://jsonplaceholder.typicode.com/users/'}${email}`)
            //     dispatch({
            //       type: "CHECK_VALID_USER_SUCCESS",
            //       data: { message: res.data.message } 
            //     })
            //   } catch (err) {
            //     dispatch({
            //       type: "CHECK_VALID_USER_ERROR",
            //       data: { error: "Something went wrong" }
            //     })
            //   }
            // }
            validate:{
              // match: value => value.email == email,
              asyncValiate: () => {
              axios.get('https://jsonplaceholder.typicode.com/users/1')
                .then(function (response) {
                  console.log(response.email);
                  const result = response.find(item => item.email === email)
                  if (response.length) {
                    console.log(response.status);
                    console.log(response.result);
                    console.log(true);
                  } else {
                    // console.log(response);
                    console.log(false);
                  }
                })
                .catch(function (error) {
                  // handle error
                  console.log(error.message);
                })
            }}
            })}
          // })}
          className="form-control my-1"
          placeholder="email"
          name='email'
        // ref={register}
        />
        {errors.email?.message}
      </div>

      <div className="form-group my-3">
        <label >Password</label>
        <input
          {...register("password", {
            required: "Password in required!",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message: "password must contain a alphanumeric character and a special character"
            }
          })}
          className="form-control my-1"
          type='password'
          placeholder="Enter your Password"
          name='password'
        // ref={register}
        />
        {errors.password?.message}
      </div>

      <button type="submit" className="btn btn-primary my-3" >Submit</button>
    </form>
  )
}

export default Signup