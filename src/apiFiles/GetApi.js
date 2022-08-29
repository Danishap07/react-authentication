// import React from 'react'
import axios from 'axios'



const GetApi = async() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export default GetApi