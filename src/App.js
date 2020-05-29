import React from 'react';
import Routes from './router';

import './style.css';

import Header from './components/Header/index';

const App = () => (
  <div>
    <Header/>
    <Routes/>
  </div>
)

export default App;
