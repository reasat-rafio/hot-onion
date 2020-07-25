import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Login/firebaseConfig";
import { useState, useEffect, createContext } from "react";
import "firebase/firestore";
import { Route, Redirect } from "react-router-dom";

!firebase.apps.length
  ? firebase.initializeApp({
      apiKey: "AIzaSyAq4QFR6CKKwGwINU3vFWIk9FNwVSSFRzQ",
      authDomain: "hot-onion-8cb99.firebaseapp.com",
      databaseURL: "https://hot-onion-8cb99.firebaseio.com",
      projectId: "hot-onion-8cb99",
      storageBucket: "hot-onion-8cb99.appspot.com",
      messagingSenderId: "714661416446",
      appId: "1:714661416446:web:eb44b9c6cfe0a78812c4af",
    })
  : firebase.app();

export const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useFirebaseForAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const useFirebaseForAuth = () => {
  const [user, setUser] = useState(null);

  const createAccount = (name, email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        return res.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const login = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch(function (error) {
        alert(error.message);
        console.log(user);
      });
  };

  const logOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(function () {
        setUser(false);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);
  return {
    user,
    createAccount,
    login,
    logOut,
  };
};
