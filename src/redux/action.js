import * as types from "./actionTypes";
import axios from "axios";

export const getRepos =
  (page = 1) =>
  (dispatch) => {
    dispatch({ type: types.GET_REPOS_REQUEST });
    return axios
      .get(
        `https://api.github.com/search/repositories?q=all&sort=stars&order=desc&page=${page}&per_page=10`
      )
      .then((res) => {
        dispatch({ type: types.GET_REPOS_SUCCESS, payload: res.data.items });
      })
      .catch((err) => {
        dispatch({ type: types.GET_REPOS_FAILURE, payload: err });
      });
  };
