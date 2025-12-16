import { useReducer } from "react";
import { reducer } from "./WalletUseReducer";
const initialState = { balance: 0, amount: 0 };

export default function Wallet() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>المحفظة: {state.balance} جنيه</h1>

      <input
        type="number"
        value={state.amount}
        onChange={(e) =>
          dispatch({ type: "changeAmount", payload: Number(e.target.value) })
        }
        placeholder="أدخل المبلغ"
      />

      <br />
      <br />

      <button onClick={() => dispatch({ type: "Deposit" })}>إيداع</button>
      <button onClick={() => dispatch({ type: "Withdraw" })}>سحب</button>
    </div>
  );
}
