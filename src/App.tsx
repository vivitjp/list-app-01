import React from 'react';
import './App.css';
import AppBody from './component/table/SampleTable';
import FakeTable from './component/fake/FakeTable';
import AppContext from './component/useContext/AppContext';
import AppContextMin from './component/useContextMin/AppContextMin';
import AppRef from './component/useRef/AppRef';

const switcher: { [key: string]: boolean } = {
  Main: false,
  Fake: false,
  Context: false,
  ContextMin: false,
  Ref: true,
}

function App() {
  return (
    <div className="App">
      <div className="App-header">REST & fetch: HEADER</div>
      <div className="App-body">
        <div className="App-body-scroll">
          {switcher.Main && <AppBody />}
          {switcher.Fake && <FakeTable />}
          {switcher.Context && <AppContext />}
          {switcher.ContextMin && <AppContextMin />}
          {switcher.Ref && <AppRef />}
        </div>
      </div>
      <div className="App-footer">REST & fetch: FOOTER</div>
    </div>
  );
}

export default App;