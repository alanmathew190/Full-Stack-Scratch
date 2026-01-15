import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home';
import Create from './components/Create';
import ViewNote from './components/ViewNote';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Navbar from './fixed/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view" element={<ViewNote />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App