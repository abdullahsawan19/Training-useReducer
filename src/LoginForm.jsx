import React, { useReducer, useState } from "react";
import { reducer } from "./LoginReducer";

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
};

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state.username === "admin" && state.password === "123") {
            resolve();
          } else {
            reject("بيانات الدخول غير صحيحة! ❌");
          }
        }, 1000);
      });

      dispatch({ type: "LOGIN_SUCCESS" });
      alert("تم تسجيل الدخول بنجاح! 🎉");
    } catch (err) {
      dispatch({ type: "LOGIN_ERROR", payload: err });
    }
  };

  return (
    <div className="login-container">
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={(e) => {
            dispatch({
              type: "FIELD_CHANGE",
              fieldName: "username",
              payload: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) => {
            dispatch({
              type: "FIELD_CHANGE",
              fieldName: "password",
              paylode: e.target.value,
            });
          }}
        />
        <br />
        <button
          onClick={() => dispatch({ type: "LOGIN_START" })}
          disabled={state.isLoading}
        >
          {state.isLoading ? "جاري التحميل..." : "تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
}
