import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Dogs from "./components/Dogs";
import Home from "./components/Home";
import Pets from "./components/Pets";

function App() {
  return (
    <div className="App">
      <h1>Multipage aplikacija</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pets">Pets</NavLink>
          </li>
          <li>
            <NavLink to="/pets/dogs">Dogs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/dogs" element={<Dogs />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </div>
  );
}

export default App;
