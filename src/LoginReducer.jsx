export function reducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };

    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
        error: "", 
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        password: "",
        error: "",
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload, 
        password: "",
      };

    default:
      return state;
  }
}
