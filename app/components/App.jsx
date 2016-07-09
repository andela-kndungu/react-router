import React from 'react';
import { Link } from 'react-router';

const App = () => {
  return (
    <div>
      <h1>React Router Tutrorial</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/repos">Repos</Link></li>
      </ul>
    </div>
  );
};

export default App;

