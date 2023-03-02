import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  repos: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_REPOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_REPOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repos: payload,
      };
    case types.GET_REPOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
        repos: [],
      };
    default:
      return state;
  }
};
