//import "./App.css"
import AppBody from "./component/table/SampleTable"
import FakeTable from "./component/fake/FakeTable"
import AppContext from "./component/useContext/AppContext"
import AppContextMin from "./component/useContextMin/AppContextMin"
import AppRef from "./component/useRef/AppRef"
import { Memo } from "./component/React.memo/memo"
import { Callback1 } from "./component/useCallback/Callback1"
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
import { IndexCustomHooks } from "component/customHooks/IndexCustomHooks"
import { UseReducer } from "component/useReducer/UseReducer"
import { UseMemo } from "component/useMemo/UseMemo"
import { UseMemo2 } from "./component/useMemo/UseMemo2"
import { UseCallback } from "component/useCallback/UseCallback"
import {
  UseRefStateSatet,
  UseRefPointer,
  UseRefForwarder,
  //UseRefArray,
} from "component/useRef/UseRefState"

function App() {
  return (
    <div className="flex flex-col justify-between p-0 m-0 overflow-hidden h-screen">
      <div className="flex flex-row justify-center items-center w-full h-16 m-0 overflow-hidden text-3xl bg-gray-300 text-gray-500">
        REST & fetch: HEADER
      </div>
      <div className="flex-grow p-0 m-0 overflow-y-scroll justify-center h-max">
        {false && <AppBody />}
        {false && <FakeTable />}
        {false && <AppContext />}
        {false && <AppContextMin />}
        {false && <AppRef />}
        {false && <UseCallback />}
        {false && <CallbackData />}
        {true && <Callback1 />}
        {false && <Selectcompo />}
        {false && <AClass />}
        {false && <ACompo />}
        {false && <Timer />}
        {false && <AForm />}
        {false && <Login />}
        {false && <AxiosGet />}
        {false && <User id={1} />}
        {false && <RandomApp />}
        {false && <IndexCustomHooks />}
        {false && <UseReducer />}
        {false && <Memo />}
        {false && <UseMemo />}
        {false && <UseMemo2 />}
        {false && <UseRefForwarder />}
      </div>
      <div className="relative bottom-0 flex flex-row justify-center items-center w-full py-3 m-0 text-base bg-slate-300 text-gray-400 ">
        REST & fetch: FOOTER
      </div>
    </div>
  )
}

export default App
