import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="main-header">React Crud Operations</h1>
        <nav className="nav-links">
          <Link to="/create">Create</Link>
          <Link to="/read">Read</Link>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/read" replace />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
