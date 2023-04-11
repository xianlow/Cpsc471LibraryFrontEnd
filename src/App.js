import './styles/App.css';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Product from './pages/ProductPage';
import ProductPageEmp from './pages/ProductPageEmp';
import ProductEmp from './components/ProductEmp';
import ProductGuest from './pages/ProductPageGuest';
import SignUp from './pages/SignUpPage';
import CustomerSearch from './components/CustomerSearch'
import CustomerSearchAdmEmp from './components/CustomerSearchAdmEmp'
import Overdue from './pages/OverduePage'
import CheckPickUp from './pages/PickupDatesPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/productregis' element={<Product/>} />
          <Route path='/product' element={<ProductGuest />} />
          <Route exact path ='/signup' element={<SignUp/>} />
          <Route path='/productemp' element={<ProductPageEmp/>} />
          <Route path='/productemp/productsearch' element={<ProductEmp/>} />
          <Route path='/customersearch' element={<CustomerSearch/>} />
          <Route path='/customersearch/customer' element={<CustomerSearchAdmEmp/>} />
          <Route path='/overdue' element={<Overdue/>} />
          <Route path='/checkpickup' element={<CheckPickUp/>} />
            {
                  //<Route exact path='/adminpage' element={<AdminPage/>}/>
                  }
            {
                    //<Route exact path='/Engineering' element={<Engineering/>}/>
                  }
              </Routes>
      </Router>
    </div>
  );
}

export default App;
