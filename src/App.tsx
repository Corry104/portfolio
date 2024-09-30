import React from 'react';
import './App.scss';
import './assets/styles/_main.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/layout';
import { About } from './components/About/about';
import { Contact } from './components/Contact/contact';
import { Projects } from './components/Projects/projects';
import {  Welcome } from './components/Welcome/welcome';
import { NoPage } from './components/404/noPage';

const App: React.FC = () => {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Welcome />} /> */}
          <Route path="home" element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="letsplay" element={<LetsPlay />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      

    </>

  );
}

export default App;
