import React from 'react';
import './adminDashboard.css'; // Import your custom stylesheet
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

  return (
    <div className="admin-dashboard">
      
        <h3>Admin Dashboard</h3>

        <div className="row">
            <div className="custom-box">
              <Link to='/customerTable'>
              <p className='endpoint'>GET: ALL CUSTOMERS</p>
              </Link>
            </div>
            <div className="custom-box">
              <Link to='/shipmentStatus'>
              <p className='endpoint'>GET: SHIPMENT STATUS COUNT</p>
              </Link>
            </div>
            <div className="custom-box">
            <Link to='/ordersTable'>
              <p className='endpoint'>GET: ORDERS STATUS</p>
              </Link>
            </div>

            <div className="custom-box">
            <Link to='/findCustomerByEmail'>
              <p className='endpoint'>GET: CUSTOMER BY EMAIL</p>
              </Link>
            </div>

            <div className="custom-box">
            <Link to='/findCustomerByFullName'>
              <p className='endpoint'>GET: CUSTOMER BY FULL NAME</p>
              </Link>
            </div>
            <div className="custom-box">
            <Link to='/findOrdersByStore'>
              <p className='endpoint'>GET: ORDERS BY STORE </p>
              </Link>

            </div>
        
        </div>
      
      
    </div>
  );
};

export default AdminDashboard;
