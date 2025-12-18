import { useReducer } from "react";
import "./App.css";
import Wallet from "./Wallet";
import LoginForm from "./LoginForm";
import PatientManager from "./PatientManager";
import BankAccount from "./BankAccount";

function App() {
  return (
    <div className="App">
      {/* <Wallet /> */}
      {/* <LoginForm /> */}
      {/* <PatientManager /> */}
      <BankAccount />
    </div>
  );
}

export default App;
