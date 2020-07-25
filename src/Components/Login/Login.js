import React, { useState } from "react";
import "./Login.css";
import img from "../../hot-onion-restaurent-resources/logo2.png";
import { useForm } from "react-hook-form";
import { useAuth } from "../firebase";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    const { email, password } = data;
    setEmail(email);
    setPassword(password);
    login(email, password).then(() => (window.location.pathname = "/"));
  };

  return (
    <div className="SignUp">
      <div className="signup-core">
        <img src={img} alt="" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter your email.."
            type="text"
            name="email"
            ref={register({ required: true })}
          />

          <input
            placeholder="Enter your password.."
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          <input type="submit" value="LogIn" />
        </form>
        <p>
          <a href="/signIn">Don't have an account?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
