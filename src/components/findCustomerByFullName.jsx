import React, { useState } from 'react';
import axios from 'axios';

const FindCustomerByFullName = () => {
  const [fullName, setFullName] = useState('');
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    
    axios.get(`http://localhost:8082/api/v1/customers/${fullName}/byFullName`)
      .then(response => {
        console.log(response);
        setCustomer(response.data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setCustomer(null);
        setError('Customer not found');
      });
  };

  return (
    <div>
      <h2>Find Customer by Full Name</h2>
      <div>
        <label>Email:</label>
        <input type="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {customer && (
        <div>
          <p><b><u>Customer Details</u></b></p>
          <p>ID: {customer[0].customerId}</p>
          <p>Name: {customer[0].fullName}</p>
          <p>Email: {customer[0].emailAddress}</p>
          
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default FindCustomerByFullName;
