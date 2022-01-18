import React from 'react';
import './App.css';
import AppBody from './component/table/SampleTable';
import FakeTable from './component/fake/FakeTable';
import AppContext from './component/useContext/AppContext';
import AppContextMin from './component/useContextMin/AppContextMin';
import AppRef from './component/useRef/AppRef';
import AppEffect from './component/useEffect/AppEffect';

function App() {
  return (
    <div className="App">
      <div className="App-header">REST & fetch: HEADER</div>
      <div className="App-body">
        <div className="App-body-scroll">
          {false && <AppBody />}
          {false && <FakeTable />}
          {false && <AppContext />}
          {false && <AppContextMin />}
          {false && <AppRef />}
          {true && <AppEffect />}
        </div>
      </div>
      <div className="App-footer">REST & fetch: FOOTER</div>
    </div>
  );
}

export default App;