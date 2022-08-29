import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "./create.css"
import axios from 'axios'

const Create = () => {
  const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [checkbox, setCheckbox] = useState(false);

const postData = () => {
  axios.post(`https://reqres.in/api/posts`, {
  firstName,
  lastName,
  checkbox
})
.then(function (response) {
  console.log(response.data);
})
.catch((error)=> {
  console.log(error);
})
}
return (
  <Form className="create-form main">
    <Form.Field >
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={postData}>Submit</Button>
  </Form>
)
}

export default Create;