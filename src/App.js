import React from 'react';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import Container from '@mui/material/Container';

import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom'; // Fix: Import Switch directly
 
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
           <Routes>
            <Route path='/' Component={Trending} exact/>
            <Route path='/movies' Component={Movies}/>
            <Route path='/series' Component={Series}/>
            <Route path='/search' Component={Search}/>
        </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

