import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <h1>GhettoHub Issues</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/repos">Repos</Link></li>
      </ul>
      {props.children}
    </div>
  );
};

App.propTypes = React.PropTypes.any;

export default App;

