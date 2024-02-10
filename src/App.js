// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './component/Home';
import Destination from './Pages/Destination';
import Passion from './Pages/Passion';
import Footer from './component/Footer';

function App() {
  // const[data,setData] = useState([]);
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/passion' element={<Passion/>}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
