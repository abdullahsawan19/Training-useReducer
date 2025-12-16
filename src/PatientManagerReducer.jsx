export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };

    case "ADD_PATIENT":
      return {
        ...state,
        patients: [...state.patients, action.payload],
        name: "",
        password: "",
      };

    case "DELETE_PATIENT":
      return {
        ...state,
        patients: state.patients.filter((p) => p.id !== action.payload),
      };

    default:
      return state;
  }
}
