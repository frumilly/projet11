import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail'
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} /> 
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
   
   
  );
}

export default App;
