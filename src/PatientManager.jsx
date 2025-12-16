import React, { useReducer } from "react";
import { reducer } from "./PatientManagerReducer";

const initialState = {
  name: "",
  password: "",
  patients: [],
};

export default function PatientManager() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (e) => {
    e.preventDefault();

    if (state.name !== "" && state.password !== "") {
      const newPatient = {
        id: Date.now(),
        name: state.name,
        password: state.password,
      };

      dispatch({ type: "ADD_PATIENT", payload: newPatient });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>نظام تسجيل المرضى (useReducer)</h2>

      <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="اسم المريض"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_INPUT",
              payload: e.target.value,
              fieldName: "name",
            })
          }
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <input
          type="password"
          placeholder="كلمة السر"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_INPUT",
              payload: e.target.value,
              fieldName: "password",
            })
          }
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button
          type="submit"
          style={{ padding: "8px 15px", cursor: "pointer" }}
        >
          إضافة +
        </button>
      </form>

      <hr />

      <h3>قائمة المرضى ({state.patients.length})</h3>

      {state.patients.length === 0 ? (
        <p style={{ color: "#777" }}>لا يوجد مرضى مسجلين حالياً...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {state.patients.map((patient) => (
            <li
              key={patient.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <div>
                <strong>الاسم:</strong> {patient.name} <br />
                <small>Pass: {patient.password}</small>
              </div>

              <button
                onClick={() =>
                  dispatch({ type: "DELETE_PATIENT", payload: patient.id })
                }
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                مسح 🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
