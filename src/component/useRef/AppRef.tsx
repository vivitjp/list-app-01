import { useState, useRef, useEffect } from "react"

function AppRef() {
  const [size, setSize] = useState<number>(0);

  const divRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    setSize(divRef.current.clientWidth);
  }, []);

  const setColor = () => {
    divRef.current.style.color = "red";
  }

  return (<>
    <div ref={divRef}>{size}</div>
    <button onClick={() => setColor()} >赤</button>
  </>)
}

export default AppRef