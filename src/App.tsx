import React from 'react';
import './App.css';
import AppBody from './AppBody';
import FakeBody from './fake/FakeBody';

function App() {
  return (
    <div className="App">
      <div className="App-header">REST & fetch: HEADER</div>
      <div className="App-body">
        <div className="App-body-scroll">
          <AppBody />
          <FakeBody />
        </div>
      </div>
      <div className="App-footer">REST & fetch: FOOTER</div>
    </div>
  );
}

export default App;