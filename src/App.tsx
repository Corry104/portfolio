import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
    
  );
}

export default App;
