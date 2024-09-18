import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/headerIndex'; 
import HomeItem from './pages/Home/homeindex';
import AppMovies from './components/services/service';



function App() {
  return (
  //  O routes precisa estar em um arquivo separado
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeItem />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
