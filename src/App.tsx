import "./App.css"
import AppBody from "./component/table/SampleTable"
import FakeTable from "./component/fake/FakeTable"
import AppContext from "./component/useContext/AppContext"
import AppContextMin from "./component/useContextMin/AppContextMin"
import AppRef from "./component/useRef/AppRef"
import { Callback1 } from "./component/useCallback/Callback1"
import { Callback2 } from "./component/useCallback/Callback2"
import { Callback3 } from "./component/useCallback/Callback3"
import { Callback4 } from "./component/useCallback/Callback4"
import Selectcompo from "./component/jsx/Selectcompo"
import AClass from "./component/jsx/AClass"
import ACompo from "component/jsx/ACompo"
import Timer from "component/jsx/Timer"
import AForm from "component/jsx/AForm"
import Login from "component/jsx/Login"
import AxiosGet from "component/jsx/AxiosGet"
import User from "component/jsx/User"
import RandomApp from "component/mocks/RandomApp"
import { CallbackData } from "component/useCallbackData/CallbackData"

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
          {false && <CallbackData />}
          {true && <Callback1 />}
          {false && <Callback2 />}
          {false && <Callback3 />}
          {false && <Callback4 />}
          {false && <Selectcompo />}
          {false && <AClass />}
          {false && <ACompo />}
          {false && <Timer />}
          {false && <AForm />}
          {false && <Login />}
          {false && <AxiosGet />}
          {false && <User id={1} />}
          {false && <RandomApp />}
        </div>
      </div>
      <div className="App-footer">REST & fetch: FOOTER</div>
    </div>
  )
}

export default App
