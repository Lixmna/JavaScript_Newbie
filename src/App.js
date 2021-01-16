import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2
          ? (<div>맞아요!</div>)
          : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}

export default App