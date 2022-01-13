import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Allpage from './components/Allpage';
import Alldata from './components/Alldata';
import Report from './Pages/Report';
import Status from './Pages/Status';
import Menu from './components/Menu';
import Bmi from './Pages/Bmi';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          

          <Routes>
            <Route path="/" element={<Alldata />} />
            <Route path="report" element={<Report />} />
            <Route path="status" element={<Status />} />
            <Route path="screen" element={<Bmi />} />
            <Route path="register" element={<Allpage />} />
          </Routes>
          <Menu />
        </div>
      </div>
    </BrowserRouter>
  );
}
