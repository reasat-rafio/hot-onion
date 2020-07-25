import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import img from "../../hot-onion-restaurent-resources/logo2.png";
import { useAuth } from "../firebase";

const Signin = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { createAccount } = useAuth();

  const { register, handleSubmit, errors } = useForm();

  const validatePassWord = (value) => {
    const pass = document.querySelector(".password").value;
    if (value === pass) return true;

    return false;
  };

  const submit = (data) => {
    const { name, email, confirmPassword } = data;

    setCurrentUser({
      name,
      email,
      password: confirmPassword,
    });

    createAccount(name, email, confirmPassword).then(
      () => (window.location.pathname = "/")
    );
  };

  return (
    <div className="SignUp">
      <div className="signup-core">
        <img src={img} alt="" />

        <form onSubmit={handleSubmit(submit)}>
          <input
            placeholder="Name"
            name="name"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Name is required </span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span>Name must be more than 3 character </span>
          )}
          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span>Email is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span>Email is incorrect</span>
          )}
          <input
            className="password"
            type="password"
            placeholder="Password"
            name="password"
            ref={register({
              required: true,
              pattern: /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span>Password is required</span>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <span>
              Password must contain 8 characters and at least one number, one
              letter and one unique character such as !#$%&?
            </span>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            ref={register({ required: true, validate: validatePassWord })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <span>Password is not matched</span>
            )}

          <input type="submit" value="Sing In" />
        </form>
        <p>
          <a href="/login">already have an account?</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
