import axios from "axios";
import React, { useRef } from "react";
import "./login.css";
import { useAuth } from "../../hook/useAuth";

export const Login = () => {
  const { setToken } = useAuth();
  const elEmail = useRef();
  const elPassword = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("https://reqres.in/api/login", {
        email: elEmail.current.value,
        password: elPassword.current.value,
      })
      .then((res) => setToken(res.data))
      .catch((err) => console.log(err));

    // fetch("https://reqres.in/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: elEmail.current.value,
    //     password: elPassword.current.value,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <form onSubmit={handleFormSubmit} className="loginForm">
          <h1 className="loginText">Login Page</h1>
          <input
            ref={elEmail}
            className="loginInput mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600"
            type="email"
            placeholder="Email...."
          />
          <input
            ref={elPassword}
            className="loginInput mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600"
            type="password"
            placeholder="Password...."
          />
          <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
