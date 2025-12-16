export function reducer(state, action) {
  switch (action.type) {
    case "Deposit":
      return { ...state, balance: state.balance + state.amount };

    case "Withdraw":
      if (state.balance < state.amount) {
        alert("عفواً.. رصيدك لا يسمح!");
        return state;
      }
      return { ...state, balance: state.balance - state.amount };

    case "changeAmount":
      return { ...state, amount: action.payload };

    default:
      return state;
  }
}
