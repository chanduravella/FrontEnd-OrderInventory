import React, { useState } from 'react';
import axios from 'axios';

const FindOrdersByStore = () => {
  const [store, setStore] = useState('');
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    
    axios.get(`http://localhost:8082/api/v1/orders/${store}`)
      .then(response => {
        console.log(response);
        setOrders(response.data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setOrders(null);
        setError('No Orders Found');
      });
  };

  return (
    <div >
      <h2>Find Orders By Store </h2>
      <div style={{marginLeft: '300px', marginTop:'10px'}}>
        <label>Store:</label>
        <input type="text" value={store} onChange={(e) => setStore(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {orders && (
        <table border='1px' style={{marginLeft: '300px', marginTop:'10px'}}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Store Name</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.storeName}</td>
                <td>{order.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default FindOrdersByStore;
