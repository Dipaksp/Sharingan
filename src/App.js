import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route, BrowserRouter} from "react-router-dom";

const App = ()=> {
  const pageSize = 6;
  const apiKey = "264070c1bdc740fa86d3140b9c9cdd39"
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
  

        <Routes>
          <Route path="/"  element={<News  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route path="/business" element={<News  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
          <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route> 
          <Route path="/general" element={<News  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route path="/health" element={<News  apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route> 
          <Route path="/science" element={<News  apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route> 
          <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route> 
          <Route path="/technology" element={<News  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route> 
        </Routes>
        </BrowserRouter>
      </div>
    )

}

export default App;
