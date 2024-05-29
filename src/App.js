import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Routes>
          {/* <Route path="/home" Component={Home} /> */}
          <Route path="/" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
