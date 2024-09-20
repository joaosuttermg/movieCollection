import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppMovies from './components/services/service';
import RoutesApp from '.././src/routes/routes'
// import Details from '../src/pages/MovieDetails/movieDetails';


function App() {
  return (
  <RoutesApp/>
  
  );
}

export default App;
