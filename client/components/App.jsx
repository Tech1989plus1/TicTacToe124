import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="ticTacToe">
        <div className="column">
          <span className="square">X</span>
          <span className="square">O</span>
          <span className="square">X</span>
        </div>
        <div className="column">
          <span className="square">X</span>
          <span className="square">O</span>
          <span className="square">X</span>
        </div>
        <div className="column">
          <span className="square">X</span>
          <span className="square">O</span>
          <span className="square">X</span>
        </div>
      </div>
    );
  }
}

export default App;