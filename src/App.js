/*eslint-disable*/
import './App.css';

import NavBar  from './components/NavBar';
import MainList  from './components/MainList';
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import About from "./components/About";
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import Error from "./components/Error";
import {useState} from "react";
import data from "./data";
function App() {
    const [shoes] = useState(data)
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path ="/" element={<MainList shoes={shoes}/>}/>
            <Route path ="/detail/:id" element={<Detail shoes={shoes}/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path ="*" element={<Error/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
