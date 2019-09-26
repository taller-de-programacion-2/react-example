import api from "../../Api";

export const GET_PEOPLE = "GET_PEOPLE";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";


export const getPeople = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_PEOPLE
    })
    const people = await api.getPeople();
    dispatch({
      type: GET_PEOPLE_SUCCESS,
      payload: people
    });
  }
}