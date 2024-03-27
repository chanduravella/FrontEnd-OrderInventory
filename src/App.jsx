import React, { useState, createContext, useMemo } from 'react';
import Nav from './components/nav';
import './components/nav.css'
import './components/login.css'
import Home from './components/home';
import Login from './components/login'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Register from './components/register';
import Counter from './components/counter';
import Parent from './components/parent';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/adminDashboard';
import CustomerTable from './components/customerTable';
import ShipmentStatus from './components/shipmentStatus';
import Footer from './components/footer';
import OrdersTable from './components/ordersTable';
import FindCustomerByEmail from './components/findCustomerByEmail';
import FindOrdersByStore from './components/findOrdersByStore';
import FindCustomerByFullName from './components/findCustomerByFullName';



export const LoginContext = createContext();

const App = () => {

  const [count, setCount] = useState(0);

  const [login, setLogin] = useState({
    email: "",
    category: "",
    login: false
  });

  console.log("Initial login state:", login);

  const value = useMemo(() => ({ login, setLogin }), [login, setLogin]);

  const incr = () => {
    setCount(count + 1);
  }

  const decr = () => {
    setCount(count - 1);
  }




  return (
    <div>
      <LoginContext.Provider value={value}>
      {console.log(value.login)}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/counter" element={<Counter />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path ="/adminDashboard" element={<AdminDashboard/>}/>
          <Route path='/customerTable' element={<CustomerTable/>}/>
          <Route path='/shipmentStatus' element={<ShipmentStatus/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/ordersTable' element={<OrdersTable/>}/>
          <Route path='/findCustomerByEmail' element={<FindCustomerByEmail/>}/>
          <Route path='/findCustomerByFullName' element={<FindCustomerByFullName/>}/>
          <Route path='/findOrdersByStore' element={<FindOrdersByStore/>}/>
          <Route path="/parent" element={<Parent count={count} incr={incr} decr={decr} />} />

        </Routes>
        
      </Router>
      </LoginContext.Provider >
    </div>
  );
};


export default App;