import "./App.css";
import Router from "./routes/Router";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/123">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/new">New</NavLink>
        </li>
        <li>
          <NavLink to="/new/sport">Sport</NavLink>
        </li>
        <li>
          <NavLink to="/new/economy">Economy</NavLink>
        </li>
      </ul>

      <Router />
    </>
  );
}

export default App;
