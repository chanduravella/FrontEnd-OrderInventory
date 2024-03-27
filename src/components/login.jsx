// src/components/Login.jsx
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../App';

const Login = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: "",
        category: ""
    });

    console.log(login)
    const [errMsg, setErrMsg] = useState("");
    const value = useContext(LoginContext);

    const handleChange = (event) => {
        
        // copy state.login details to lgn

        const lgn = { ...login }

        // update lgn details

        lgn[event.target.name] = event.target.value;

        // copy lgn detail to state.login
        
        setLogin(lgn);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log("Login data:", login);

        axios
            .post("http://localhost:8082/customers/login", login)
            .then((res) => {
                setErrMsg("");
                console.log(res);

                const { email, category, login } = res.data;
                value.setLogin({ email, category, login });
                alert("User logged in successfully!");
                navigate('/dashboard');

                if (category === 'admin') {
                    navigate('/adminDashboard');
                  } else if (category === 'customer') {
                    navigate('/dashboard');
                  }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.message);
                setErrMsg(err.response.data.message || "An error occured");
            });
    }

  return (
    
    <div>
         {errMsg &&
                <div className="alert alert-danger w-50 mx-auto" role="alert">
                    {errMsg}
                </div>
            }
      <h2>Login</h2>
      <form  onSubmit={handleSubmit}>
        <div>
        <label className="form-label">Email</label>
        <input name="email" onChange={handleChange} value={login.email} className="form-control" type="text" placeholder="Enter email address"/>
        </div>
        <div>
        <label className="form-label">Enter Password</label>
        <input name="password" onChange={handleChange} value={login.password}className="form-control" type="password" placeholder="enter password"/>
        </div>  
        <div>
            <label className="form-label">Select Category</label>
            <select name="category" onChange={handleChange} value={login.category}>
                <option></option>
                <option>admin</option>
                <option>customer</option>
            </select>
            
        </div>      
        <input className="btn" type="submit" value="Login"/>
        <div>
        <p>Not a User? Click here to <button><Link to="/register">Register</Link></button></p>
      </div>        
    </form>
    </div>
  );
};

export default Login;
