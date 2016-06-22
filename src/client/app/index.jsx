import React from 'react';
import {render} from 'react-dom';
import Grapher from './Grapher.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
          <Grapher />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
