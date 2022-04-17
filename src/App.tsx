//import "./App.css"
import { UseContext } from "./component/useContext/UseContext"
import { Memo } from "./component/React.memo/memo"
import { IndexCustomHooks } from "component/customHooks/IndexCustomHooks"
import { UseReducer } from "component/useReducer/UseReducer"
import { UseMemo } from "component/useMemo/UseMemo"
import { UseMemo2 } from "./component/useMemo/UseMemo2"
import { UseCallback } from "component/useCallback/UseCallback"
import { UseRefForwarder } from "component/useRef/UseForwardRef"
import { UseRefStateSatet, UseRefPointer } from "component/useRef/UseRefState"

function App() {
  return (
    <div className="flex flex-col justify-between p-0 m-0 overflow-hidden h-screen">
      <div className="flex flex-row justify-center items-center w-full h-16 m-0 overflow-hidden text-3xl bg-gray-300 text-gray-500">
        Hooks Samples
      </div>
      <div className="flex-grow p-0 m-0 overflow-y-scroll justify-center h-max">
        {false && <UseContext />}
        {false && <UseCallback />}
        {false && <IndexCustomHooks />}
        {false && <UseReducer />}
        {false && <Memo />}
        {false && <UseMemo />}
        {false && <UseMemo2 />}
        {false && <UseRefStateSatet />}
        {false && <UseRefPointer />}
        {true && <UseRefForwarder />}
      </div>
      <div className="relative bottom-0 flex flex-row justify-center items-center w-full py-2 m-0 text-base bg-slate-300 text-gray-400 ">
        Hooks Samples
      </div>
    </div>
  )
}

export default App
