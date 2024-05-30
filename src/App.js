import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Allprofiles from "./pages/Allprofiles";
import Profile from "./pages/Profile";



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
          <Route path="/" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/home" Component={Home} />
          <Route path="/transactions" Component={Transactions} />
          <Route path="/allprofiles" Component={Allprofiles} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
