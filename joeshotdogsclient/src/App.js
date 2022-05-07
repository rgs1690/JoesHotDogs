import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Routing from "./routes";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./views/Login";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          id: authed.uid,
        };
        setUser(userInfoObj);
        console.warn(user);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Routing />
        </>
      ) : (
        <Login user={user} />
      )}
    </div>
  );
}

export default App;
