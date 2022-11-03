import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Footer from './Footer';
function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='movie/:id' element={<SingleMovie/>}></Route>
        </Routes>
       
    </div>
  );
}

export default App;
