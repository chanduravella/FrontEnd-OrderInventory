import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

const CustomerTable = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/api/v1/customers/fetchAll')
      .then(response => {
        console.log(response)
        setCustomers(response.data)
    })
      .catch(error => {console.log(error)})
  }, []);

  const handleDelete = (customer) => {
    console.log("handleDelete: ", customer);
    axios
      .delete('http://localhost:8082/api/v1/customers/deleteCustomers', { data: customer })
      .then((res) => {
        console.log(res);
        
        const updatedCustomers = customers.filter(c => c.customerId !== customer.customerId);
        setCustomers(updatedCustomers);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    

  return (
    <div className='table-container' style={{marginLeft:'300px'}} >
    <table className="table" border='1px'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={customer.customerId}>
            <td>{customer.customerId}</td>
            <td>{customer.fullName}</td>
            <td>{customer.emailAddress}</td>
            
            <td>              
            <BsTrash
                  className='bi bi-trash'
                  type="button"
                  onClick={() => handleDelete(customer)}
                />
              <Link to={`/customers/${customer.id}`}></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};


export default CustomerTable;
