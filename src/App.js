import React from 'react';
import Counter from './Counter';
 import Myname from './MyName';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Counter/>
        </div>
        <div>
          <Myname/>
        </div>
      </div>      
    );
  }
}

export default App