import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>

        {/* <Route path="/" Component={Home} /> */}
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
      
    </div>
  );
}

export default App;
