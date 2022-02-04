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
import Selectcompo from './component/jsx/Selectcompo';
import AClass from './component/jsx/AClass';
import ACompo from 'component/jsx/ACompo';
import Timer from 'component/jsx/Timer';
import AForm from 'component/jsx/AForm';
import Login from 'component/jsx/Login';
import AxiosGet from 'component/jsx/AxiosGet';
import User from 'component/jsx/User';

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
          {false && <AppCallbackTS />}
          {false && <SimpleCallback />}
          {false && <MoreCallback />}
          {false && <MoreCallback2 />}
          {false && <Selectcompo />}
          {false && <AClass />}
          {false && <ACompo />}
          {false && <Timer />}
          {false && <AForm />}
          {false && <Login />}
          {false && <AxiosGet />}
          {true && <User id={1} />}
        </div>
      </div>
      <div className="App-footer">REST & fetch: FOOTER</div>
    </div>
  );
}

export default App;