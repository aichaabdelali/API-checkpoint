import React from "react";
import UserList from "./UserList";
import "./App.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2>USERS LIST</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserList />
    </div>
  );
}

export default App;
