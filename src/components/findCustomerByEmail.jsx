import React, { useState } from 'react';
import axios from 'axios';

const FindCustomerByEmail = () => {
  const [email, setEmail] = useState('');
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    // Perform the search for the customer by email
    axios.get(`http://localhost:8082/api/v1/customers/${email}/byEmailAddress`)
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
      <h2>Find Customer by Email</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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

export default FindCustomerByEmail;
