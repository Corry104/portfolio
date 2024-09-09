import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './containers/Layout/layout';
import { Contact } from './containers/Contact/contact';
import { Home } from './containers/Home/home';
import { About } from './containers/About/about';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
    
  );
}

export default App;
