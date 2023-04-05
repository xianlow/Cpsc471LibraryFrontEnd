import './styles/App.css';
import Home from './pages/HomePage';
import Login from './components/LoginPage'
import Product from './components/Product'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/login' element={<Login />} />
          <Route path='/product' element={<Product />} />
          
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
