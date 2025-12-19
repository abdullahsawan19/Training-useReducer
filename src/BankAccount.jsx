import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  startDepositAmount: 500,
  depositAmount: "",
  withdrawAmount: "",
  loanAmount: "",
  payLoanAmount: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isActive: true,
        balance: state.startDepositAmount,
      };

    case "setStartAmount":
      return {
        ...state,
        startDepositAmount: Number(action.payload),
      };

    case "deposit":
      return {
        ...state,
        balance: state.balance + state.depositAmount,
        depositAmount: "",
      };

    case "setDepositAmount":
      return {
        ...state,
        depositAmount: Number(action.payload),
      };

    case "withdraw":
      return {
        ...state,
        balance: state.balance - state.withdrawAmount,
        withdrawAmount: "",
      };

    case "setWithdrawAmount":
      return {
        ...state,
        withdrawAmount: Number(action.payload),
      };

    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + state.loanAmount,
        loan: state.loanAmount,
        loanAmount: "",
      };

    case "setLoanAmount":
      return {
        ...state,
        loanAmount: Number(action.payload),
      };

    case "payLoan":
      if (
        state.payLoanAmount > state.loan ||
        state.payLoanAmount > state.balance
      )
        return state;
      return {
        ...state,
        balance: state.balance - state.payLoanAmount,
        loan: state.loan - state.payLoanAmount,
        payLoanAmount: "",
      };

    case "setPayLoanAmount":
      if (state.loan === 0) return state;
      return {
        ...state,
        payLoanAmount: Number(action.payload),
      };

    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) {
        alert("لا يمكن إغلاق الحساب! تأكد من سداد القروض وسحب الرصيد.");
        return state;
      }
      return initialState;

    default:
      return state;
  }
}

function BankAccount() {
  const [
    {
      balance,
      loan,
      isActive,
      startDepositAmount,
      depositAmount,
      withdrawAmount,
      loanAmount,
      payLoanAmount,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open account
        </button>

        <input
          type="number"
          placeholder="Open account with ?"
          value={startDepositAmount}
          onChange={(e) =>
            dispatch({ type: "setStartAmount", payload: e.target.value })
          }
          disabled={isActive}
        />
      </p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={!isActive}
        >
          Deposit
        </button>
        <input
          type="number"
          placeholder="Initial deposit"
          value={depositAmount}
          onChange={(e) =>
            dispatch({ type: "setDepositAmount", payload: e.target.value })
          }
        />
      </p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
          disabled={!isActive}
        >
          Withdraw
        </button>
        <input
          type="number"
          placeholder="Withdraw amount"
          value={withdrawAmount}
          onChange={(e) =>
            dispatch({ type: "setWithdrawAmount", payload: e.target.value })
          }
        />
      </p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan" });
          }}
          disabled={!isActive}
        >
          Request a loan of
        </button>
        <input
          type="number"
          placeholder="Request a loan of ?"
          value={loanAmount}
          onChange={(e) =>
            dispatch({ type: "setLoanAmount", payload: e.target.value })
          }
        />
      </p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
        <input
          type="number"
          placeholder="Pay loan of ?"
          value={payLoanAmount}
          onChange={(e) =>
            dispatch({ type: "setPayLoanAmount", payload: e.target.value })
          }
        />
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default BankAccount;
