import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Routing from "./routes";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./views/Login";

function sumChars(s) {
  var i, n = s.length, acc = 0;
  for (i = 0; i < n; i++) {
    acc += parseInt(s[i], 36) - 9;
  }
  return acc;
}
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      
      if (authed) {
        const changedStringIdToInt = sumChars(authed.uid);
        const userInfoObj = {
          id: changedStringIdToInt,
        };
        setUser(userInfoObj);
        console.warn(changedStringIdToInt);
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
