import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "./UseAuth";

const Signin = () => {
  const signIN = UseAuth();

  return (
    <div className="auth">
      <h1>Signin</h1>
      <button onClick={signIN.SigninWithGoogle}>Signin</button>
    </div>
  );
};

export default Signin;
