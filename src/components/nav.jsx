import React, { useContext } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { LoginContext } from '../App';
import axios from 'axios';

const Nav = () => {
  const value = useContext(LoginContext);
  console.log("Nav - login:", value.login);

  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get(`http://localhost:8082/customers/logout/${value.login.email}`)
      .then((response) => {
        console.log("Logout response:", response.data);
        value.setLogin(response.data);
        alert("User logged out successfully!");
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };

  return (
    <div className='divbar'>
      {console.log("nav: " + value.login.email)}
      <nav className="navbar">
        <div className="container-fluid">
          <p className='title'>Order Inventory</p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="">
                  Home
                </NavLink>
              </li>
              {value.login && value.login.category === 'admin' && value.login.login && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/adminDashboard">
                    Admin Dashboard
                  </NavLink>
                </li>
              )}
              {value.login && value.login.category === 'customer' && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
              )}
              </ul>
            <ul className="nav-list">
              {!value.login.login && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
              {value.login.login && (
                <li className="logout-btn">
                  <span className="nav-link">Welcome, {value.login.email}</span>
                  <button className="nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
