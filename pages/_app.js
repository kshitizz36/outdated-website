import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Click me</button>
      </header>
    </div>
  );
}

App.propTypes = {
  handleClick: React.PropTypes.func
};

export default App;