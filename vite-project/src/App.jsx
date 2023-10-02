import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Tests';

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} /> 
            <Route path="test" element={<Test />} />
          </Route>
        </Routes>
   
   
  );
}

export default App;
