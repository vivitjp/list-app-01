import './App.css';
import AppBody from './component/table/SampleTable';
import FakeTable from './component/fake/FakeTable';
import AppContext from './component/useContext/AppContext';
import AppContextMin from './component/useContextMin/AppContextMin';
import AppRef from './component/useRef/AppRef';
import AppCallback from './component/useCallback/AppCallback';
import SimpleCallback from './component/useCallback/SimpleCallback';
import MoreCallback from './component/useCallback/MoreCallback';
import MoreCallback2 from './component/useCallback/MoreCallback2';
import AppCallbackTS from './component/useCallback/AppCallbackTS';

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
          {false && <AppCallback />}
          {true && <AppCallbackTS />}
          {false && <SimpleCallback />}
          {false && <MoreCallback />}
          {false && <MoreCallback2 />}
        </div>
      </div>
      <div className="App-footer">REST & fetch: FOOTER</div>
    </div>
  );
}

export default App;