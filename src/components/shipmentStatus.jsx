import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShipmentStatus = () => {
  const [shipmentStatusCount, setShipmentStatusCount] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/v1/customers/shipment/status')
  .then(response => {
    console.log(response)
    setShipmentStatusCount(response.data)
})
  .catch(error => {console.log(error)})
}, []);




return (
<div className='table-container' style={{marginLeft:'300px'}} >
<table className="table" border='1px'>
  <thead>
    <tr>
      <th>Shipment Status</th>
      <th>Customer Count</th>
    </tr>
  </thead>
  <tbody>
    {shipmentStatusCount.map((shipment, index) => (
      <tr key={shipment.shipmentStatus}>
        <td>{shipment.shipmentStatus}</td>
        <td>{shipment.customersCount}</td>

        <td>              
          <Link to={`/shipmentStatusCount/${shipment.shipmentStatus}`}></Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
);
};
export default ShipmentStatus;
