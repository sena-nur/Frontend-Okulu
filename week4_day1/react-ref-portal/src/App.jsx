import { useRef, useState } from "react";
import Portal from "./components/Portal";
import "./App.css";

function App() {
  const [portalTarget, setPortalTarget] = useState(document.body);
  const [portalText, setPortalText] = useState("Dökümanın Bodysi");
  const divRef = useRef();

  const handlePortalTargetChange = () => {
    setPortalTarget(divRef.current);
    setPortalText("Deneme Div");
    console.log("handlePortal çalıştı", divRef.current.textContent);
  };

  return (
    <>
      <div ref={divRef}> Deneme </div>

      <button
        onClick={() => {
          console.log(divRef.current.textContent);
        }}
      >
        Click me
      </button>
      <Portal target={portalTarget} text={portalText}></Portal>
      <button onClick={handlePortalTargetChange}>Portal Target Değiştir</button>
    </>
  );
}
export default App;
