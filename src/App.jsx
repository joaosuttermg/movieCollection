import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import{SidebarItem} from './components/Sidebar/sidebarIndex'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/headerIndex'; 
import HomeItem from './components/Home/homeindex';

//function App() {

//  return (
//    <>
//     <SidebarItem/>
//    </>
//  )
//}

//export default App

function App() {
  return (
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