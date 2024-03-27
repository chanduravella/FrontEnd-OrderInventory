import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi-browser';


export const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: ""
});

const [errors, setErrors] = useState({});

const schema = Joi.object({
  fullName: Joi.string().min(3).max(15).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
  password: Joi.string().regex(new RegExp('^[a-zA-Z0-9#!&.$^]{3,10}$')).required()
});

const validate = () => {
  const errors = {};

  const result = Joi.validate(user, schema, {
    abortEarly: false,
});
console.log(result);

if (result.error != null)
for (let item of result.error.details) {
    errors[item.path[0]] = item.message;
}
return Object.keys(errors).length === 0 ? null : errors;
};

const handleChange = (event) => {
  console.log("Handle change");
  console.log(event);
  console.log(event.target.name);
  console.log(event.target.value);
  const newUser = { ...user };
  newUser[event.target.name] = event.target.value;
  
  setUser(newUser);
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("handle submit")
  
  // validate
  setErrors(validate());
  if (errors!== null) return;
  axios
      .post("http://localhost:8082/customers/addCustomerDto", user)
      .then((response) => {
          console.log(response);
          alert("User registered successfully!")

          // redirect user to login page
          navigate("/login")
      })
      .catch((err) => { console.log(err) })
}

  return (

    <div>
      <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    <div>
      <label className="form-label">Full Name</label>
      <input onChange={handleChange} name="fullName" value={user.fullName} className="form-control" type="text" placeholder="Enter FullName"/>
      {errors && <small className="text-danger">{errors.fullName}</small>}
      </div>
      <div>
      <label className="form-label">Email</label>
      <input onChange={handleChange} name="email" value={user.email} className="form-control" type="text" placeholder="Enter email address"/>
      {errors && <small className="text-danger">{errors.email}</small>}
      </div>
      <div>
      <label className="form-label">New Password</label>
      <input onChange={handleChange} name="password" value={user.password} className="form-control" type="password" placeholder="enter password"/>
      {errors && <small className='text-danger'>{errors.password}</small>}
      </div>
      <div>
        <label className='form-label'> Category</label>
        <select>
          <option>customer</option>
        </select>
      </div>
      <div>        
      <input className="btn" type="submit" value="Register"/>
      </div>
  </form>
  </div>
  )
}

export default Register;