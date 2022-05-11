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
      console.log(authed)
      if (authed) {
        const userName = authed.displayName;
        const values = userName.split(" ");
        const fName = values[0];
        const lName = values[1];
        const userInfoObj = {
          id: authed.uid,
          firstName: fName,
          lastName: lName,
          email: authed.email,
          isAdmin: false,
        };
        setUser(userInfoObj);
       


      
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
          <Routing uid={user.id} />
        </>
      ) : (
        <Login user={user} />
      )}
    </div>
  );
}

export default App;
