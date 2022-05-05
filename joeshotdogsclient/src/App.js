import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Routing from './routes';
import Navbar from './components/Navbar';
import './App.css';
import Login from './views/Login';
import auth from './api/auth/apiKeys';

console.log(auth.onAuthStateChanged)
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          id: authed.uid,
        };
        setUser(userInfoObj);
        console.warn(userInfoObj.uid);
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
      ): (
        <Login user={user}/>
      )}
      </div>
      
  );
}

export default App;
