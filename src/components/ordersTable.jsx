import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrdersTable = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/api/v1/orders/status')
      .then(response => {
        console.log(response)
        setOrders(response.data)
    })
      .catch(error => {console.log(error)})
  }, []);

  return (
    <div className='table-container' style={{marginLeft:'300px', marginTop:'10px'}} >
    <table className="table" border='1px'>
      <thead>
        <tr>
          <th>orderStatus</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={order.orderStatus}>
            <td>{order.orderStatus}</td>
            <td>{order.count}</td>            
  
            <td>              
              <Link to={`/orders/${order.orderStatus}`}></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};


export default OrdersTable;
